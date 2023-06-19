import { createContext, useContext, useState } from "react";

const DashboardContext = createContext()

export function DashboardContextProvider({children}){
    const [openSideNav, setOpenSideNav] = useState(false)
    const [user, setUser] = useState(null)
    const value = {openSideNav, setOpenSideNav, user, setUser}

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