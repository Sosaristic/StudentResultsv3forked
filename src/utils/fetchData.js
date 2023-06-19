import axios from "axios";

export const baseUrl = "https://elinteerie1.pythonanywhere.com/api/";

export function postData(url, userValues) {
  try {
    return axios.post(` ${baseUrl}${url}`, userValues);
  } catch (error) {}
}

export function logOut(){
  try {
    return axios.post(`${baseUrl}rest-auth/logout/`, )
  } catch (error) {
    
  }
}

