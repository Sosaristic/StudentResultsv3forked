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

export async function getData(){
  const token = window.sessionStorage.getItem("token")
  try {
    const response = await axios.get("https://elinteerie1.pythonanywhere.com/api/student/", {
       headers: {
         Authorization: `Token ${token}`
       }
     })
     return response.data
   } catch (error) {
     
   }
}

export async function getResults(query){
  const token = window.sessionStorage.getItem("token")
  try {
    const response = await axios.get(`https://elinteerie1.pythonanywhere.com/api/courses/?${query}`, {
       headers: {
         Authorization: `Token ${token}`
       }
     })
     return response.data
   } catch (error) {
     console.log(error);
   }
}



