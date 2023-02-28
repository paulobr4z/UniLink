import { createContext, ReactNode, useEffect, useState } from "react";
import Router from "next/router";
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import { api } from "../services/api";
import { AxiosError } from "axios";
import { IUser } from "../types/user";

interface ICredential {
  email: string;
  password: string;
}

interface IAuthContext {
  signIn(credentials: ICredential): Promise<void>;
  user?: IUser;
  isAuthenticated: boolean;
}

interface IAuthProvider {
  children: ReactNode;
}

export const AuthContext = createContext({} as IAuthContext);

export function signOut() {
  destroyCookie(undefined, 'singlelink.token')

  Router.push('/');  
}

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<IUser>();
  const isAuthenticated = !!user;

  // useEffect(() => {
  //   const { 'singlelink.token': token } = parseCookies();

  //   if (!token) {
  //     Router.push('/login');
  //   }
  // }, [])

  async function signIn({ email, password }: ICredential) {
    try {
      const response = await api.post('/login',{
        email,
        password
      });

      const { token, user } = response.data;

      const userID = user.id;

      console.log(token, user);

      setCookie(undefined, 'singlelink.token', token, {
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/'
      });

      setCookie(undefined, 'singlelink.userID', userID, {
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/'
      });

      setUser(user);

      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      Router.push('/account');
    } catch (error) {
      const axiosError = error as AxiosError;
      console.log(axiosError.response?.data);
    }
  }

  return(
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  )
}