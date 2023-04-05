export const GET_USER_BY_USERNAME = (username:string) => `/user/${username}`;
export const CHECK_USERNAME_ALREADY_EXISTS = (username:string) => `/user/check/${username}`;
export const GET_ACCOUNT_BY_ID = (id:string) => `/account/user/${id}`;
export const UPLOAD_FILE = '/upload';
export const UPDATE_USER = '/account/update';
export const CREATE_USER = '/user';
export const UPDATE_LINK = (link_id?:string) => `/account/link/${link_id}`;
export const UPDATE_USERNAME = '/account/update/username';
export const CREATE_LINK = '/account/link';
export const DELETE_LINK = (link_id?:string) => `/account/link/${link_id}`;
export const VERIFY_TOKEN = "http://localhost:3000/api/token";

