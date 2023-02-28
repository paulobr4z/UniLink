import { api } from "./api";
import { AxiosError } from "axios";
import {
  GET_ACCOUNT_BY_ID,
  GET_USER_BY_USERNAME,
  CHECK_USERNAME_ALREADY_EXISTS,
  UPLOAD_FILE,
  CREATE_USER
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
  try {
    const response = await api.get(GET_ACCOUNT_BY_ID(id));
    
    const { data } = response;

    return data;
  } catch (error) {
    console.log(error)
  }
}

async function uploadFile(file: any) {
  try {
    const response = await api.post(UPLOAD_FILE, file);

    console.log(response, UPLOAD_FILE, file);
    
    const { data } = response;

    return data;
  } catch (error) {
    console.log(error)
  }
}

export {
  createUser,
  getUserByUsername,
  getAccountByID,
  uploadFile,
  checkUsernameAlreadyExists
}