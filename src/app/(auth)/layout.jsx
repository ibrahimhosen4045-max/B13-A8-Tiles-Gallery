import Navber from "@/componet/Navber"

const AuthLayout = ({children}) => {
  return (
    <div>
     <Navber></Navber>

      {children}
    </div>
  )
}

export default AuthLayout
