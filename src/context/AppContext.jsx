import { createContext, useContext, useState } from "react";
import { Loader } from "../components/ui";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loader, setLoader] = useState(false);
  const value = {
    loader,
    setLoader,
  };
  return (
    <AppContext.Provider value={value}>
      {children}
      {loader && <Loader />}
      <ToastContainer transition={Zoom} position="top-center" hideProgressBar theme="dark" />
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const appContext = useContext(AppContext);
  if (appContext == undefined) {
    throw new Error("appcontext must be within a provider");
  }
  return appContext;
}
