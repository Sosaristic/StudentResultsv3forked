import { useNavigate } from "react-router-dom"
import { useAppContext } from "../context/AppContext"
import { postData, logOut } from "../utils/fetchData"
import {toast} from "react-toastify"

export function useAuthentication(){
const navigate = useNavigate()
const {setLoader} = useAppContext()
const setLoginToken = (token)=>{
window.sessionStorage.setItem("token", JSON.stringify(token))
}

const removeToken = ()=>{
    window.sessionStorage.removeItem("token")
}
const getToken = ()=>{
    const token = window.sessionStorage.getItem("token")
    return token
}

const signIn = (userValues)=>{
    setLoader(true)
postData("rest-auth/login/", userValues).then((value)=>{
    setLoader(false)
    navigate("/dashboard")
    setLoginToken(value.data)

}).catch((error)=>{
    console.log(error);
    toast.error("Error trying to log in")

    setLoader(false)
})
}

const signOut = ()=>{
    setLoader(true)
logOut().then((value)=>{
    setLoader(false)
    removeToken()
    navigate("/login", {replace: true})
console.log(value);
}).catch((error)=>{
    toast.error("Error trying to log out")
    setLoader(false)
})
}


return {setLoginToken, getToken, signIn, signOut}
}