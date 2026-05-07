import { HashLoader } from "react-spinners"


const loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <HashLoader color="#fbbf36"/>
    </div>
  )
}

export default loading
