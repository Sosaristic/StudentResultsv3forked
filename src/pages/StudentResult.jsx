import axios from "axios";
import useSWR from "swr"
import { useAuthentication } from "../hooks/useAuthentication";
import { SimpleLoader } from "../components/ui";

export default function StudentResult() {
  const {getToken} = useAuthentication()
  const token = getToken()

  async function fetchData(){
    try {
     const response = await axios.get("https://elinteerie1.pythonanywhere.com/api/courses/", {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      return response.data
    } catch (error) {
      
    }
  }

const {data, error} = useSWR("https://elinteerie1.pythonanywhere.com/api/courses/", fetchData)
console.log(data);
if(error){
  return <div>Error trying to get student results</div>
}
if(!data){
  return <div className="min-h-full min-w-full flex items-center justify-center"><SimpleLoader /></div>
}

  return (
    <div>Student results</div>
  )
}
