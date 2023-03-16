import { api } from "./api";
import { AxiosError } from "axios";
import { ICreateLink, IUpdateLinkTitle, IUpdateUserInfo, IUpdateUsernameById } from "../types/user";
import {
  GET_ACCOUNT_BY_ID,
  GET_USER_BY_USERNAME,
  CHECK_USERNAME_ALREADY_EXISTS,
  UPLOAD_FILE,
  CREATE_USER,
  UPDATE_USER,
  UPDATE_LINK,
  UPDATE_USERNAME,
  CREATE_LINK,
  DELETE_LINK
} from "../constants";

async function createUser(userInfo: any) {
  try {
    const response = await api.post(CREATE_USER, userInfo);
    
    const { data } = response;

    return data;
  } catch (error) {
    const AxiosError = error as AxiosError;
    console.log(AxiosError.response?.data)
    return AxiosError.response?.data
  }
}

async function getUserByUsername(username: string) {
  try {
    const response = await api.get(GET_USER_BY_USERNAME(username));
    
    const { data } = response;

    return data;
  } catch (error) {
    console.log(error)
  }
}

async function checkUsernameAlreadyExists(username: string) {
  try {
    const response = await api.get(CHECK_USERNAME_ALREADY_EXISTS(username));
    
    const { data } = response;

    return data;
  } catch (error) {
    console.log(error)
  }
}

async function getAccountByID(id: string) {
  if (id) {
    try {
      const response = await api.get(GET_ACCOUNT_BY_ID(id));
      
      const { data } = response;
  
      return data;
    } catch (error) {
      console.log(error)
    }    
  }
}

async function uploadFile(file: any) {
  try {
    const response = await api.post(UPLOAD_FILE, file);
    
    const { data } = response;

    return data;
  } catch (error) {
    console.log(error)
  }
}

async function updateUser({
  user_id,
  field,
  value
}: IUpdateUserInfo) {
  try {
    const response = await api.patch(UPDATE_USER, { user_id, field, value });
    
    const { data } = response;

    return data;
  } catch (error) {
    console.log(error)
  }
}

async function updateLinkByID({
  link_id,
  field,
  value
}: IUpdateLinkTitle) {
  try {
    const response = await api.patch(UPDATE_LINK(link_id), { field, value });
    
    const { data } = response;

    return data;
  } catch (error) {
    const AxiosError = error as AxiosError;
    console.log(AxiosError.response?.data)
    return AxiosError.response?.data
  }
}

async function updateUsernameById({
  user_id,
  value
}: IUpdateUsernameById) {
  try {
    const response = await api.patch(UPDATE_USERNAME, { user_id, value });
    
    const { data } = response;

    return data;
  } catch (error) {
    const AxiosError = error as AxiosError;
    console.log(AxiosError.response?.data)
    return AxiosError.response?.data
  }
}

async function createLink({
  user_id,
  title,
  url
}: ICreateLink) {
  try {
    const response = await api.post(CREATE_LINK, { user_id, title, url });
    
    const { data } = response;

    return data;
  } catch (error) {
    const AxiosError = error as AxiosError;
    console.log(AxiosError.response?.data)
    return AxiosError.response?.data
  }
}

async function deleteLink(link_id?: string) {
  try {
    const response = await api.delete(DELETE_LINK(link_id));
    
    const { data } = response;

    return data;
  } catch (error) {
    console.log(error)
    const AxiosError = error as AxiosError;
    console.log(AxiosError.response?.data)
    return AxiosError.response?.data
  }
}

export {
  createUser,
  getUserByUsername,
  getAccountByID,
  uploadFile,
  updateUser,
  checkUsernameAlreadyExists,
  updateLinkByID,
  updateUsernameById,
  createLink,
  deleteLink
}