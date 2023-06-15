import axios from "axios";

const baseUrl = "https://elinteerie1.pythonanywhere.com/api/";

export function loginIn(url, userValues) {
  try {
    return axios.post(` ${baseUrl}${url}`, userValues);
  } catch (error) {}
}
