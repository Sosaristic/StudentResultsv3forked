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

export async function getUserData(token){
console.log(token);
  try {
    const response = await axios.get(`${baseUrl}student/`, {
      headers:{
        Authorization:  `Token ${token.key}`
      }
    })
    return response
  } catch (error) {
    console.log(error);
  }
}