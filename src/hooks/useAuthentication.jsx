import { useNavigate } from "react-router-dom"
import { useAppContext } from "../context/AppContext"
import { loginIn } from "../utils/fetchData"
import {toast} from "react-toastify"

export function useAuthentication(){
const navigate = useNavigate()
const {setLoader} = useAppContext()
const setLoginToken = (token)=>{
window.sessionStorage.setItem("token", JSON.stringify(token))
}

const getToken = ()=>{
    const token = window.sessionStorage.getItem("token")
    return token
}

const signIn = (userValues)=>{
    setLoader(true)
loginIn("rest-auth/login/", userValues).then((value)=>{
    setLoader(false)
    navigate("/dashboard")
    setLoginToken(value.data)

}).catch((error)=>{
    console.log(error);
    toast.error(error.message)

    setLoader(false)
})
}


return {setLoginToken, getToken, signIn}
}