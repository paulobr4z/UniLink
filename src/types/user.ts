export interface IUser {
  id?: string;
  username?: string;
  bg_color?: string;
  bg_color_link?: string;
  text_color_link?: string;
  bio: string;
  color_link: string;
  email: string;
  first_name: string;
  last_name: string;
  links: ILinks[];
  password: string;
  avatar: string;
}

export interface ILinks {
  is_active: boolean;
  url: string;
  title: string;
}