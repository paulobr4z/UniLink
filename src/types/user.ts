export interface IUser {
  _id?: string;
  username?: string;
  bg_color?: string;
  bg_color_link?: string;
  text_color?: string;
  border_color?: string;
  bio?: string;
  color_link?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  links: ILinks[] | [];
  password?: string;
  avatar?: string;
}

export interface ILinks {
  _id?: string;
  is_active: boolean;
  url: string;
  title: string;
}

export interface IUpdateUserInfo {
  user_id: string,
  field: string,
  value: string  
}

export interface IUpdateLinkTitle {
  link_id?: string,
  field?: string,
  value?: string | boolean 
}

export interface IUpdateUsernameById {
  user_id?: string,
  value?: string  
}

export interface ICreateLink {
  user_id?: string,
  title?: string,
  url?:string
}