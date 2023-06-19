import { createContext, useContext, useState } from "react";

const DashboardContext = createContext()

export function DashboardContextProvider({children}){
    const [openSideNav, setOpenSideNav] = useState(false)
    const [key, setKey] = useState(window.sessionStorage.getItem("token"))
    const value = {openSideNav, setOpenSideNav}

    return <DashboardContext.Provider value={value}>
{children}
    </DashboardContext.Provider>
}

export function useDashboardContext(){
    const dashboardContext = useContext(DashboardContext)
    if(dashboardContext == undefined){
        throw new Error("dashboard context should be within a provider")
    }
    return dashboardContext
}