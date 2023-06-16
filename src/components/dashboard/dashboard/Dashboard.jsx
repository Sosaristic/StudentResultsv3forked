import { useEffect } from "react"
import { useAppContext } from "../../../context/AppContext"

export default function Dashboard() {
const {setOpenSideNav} = useAppContext()

useEffect(()=>{
  console.log("hello");
  setOpenSideNav(false)
}, [])

  return (
    <div>Dashboard</div>
  )
}
