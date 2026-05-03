import Navber from "@/componet/Navber"
import { ToastContainer } from "react-toastify"

const AuthLayout = ({children}) => {
  return (
    <div>
     {/* <Navber></Navber> */}

      {children}
      <ToastContainer position="top-center"/>
    </div>
  )
}

export default AuthLayout
