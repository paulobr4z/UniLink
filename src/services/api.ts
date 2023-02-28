import axios from "axios";
import { parseCookies } from 'nookies'

let cookies = parseCookies();

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
  headers: {
    Authorization: `Bearer ${cookies['singlelink.token']}`
  }
})