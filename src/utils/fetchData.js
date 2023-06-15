import axios from "axios";

const baseUrl = "https://elinteerie1.pythonanywhere.com/api/";

export function postData(url, userValues) {
  try {
    return axios.post(` ${baseUrl}${url}`, userValues);
  } catch (error) {}
}
