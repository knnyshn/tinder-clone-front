import axios from "axios";
export const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://tinder-clone-back.herokuapp.com' : 'http://localhost:8000'
})