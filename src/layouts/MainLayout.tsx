import { Outlet } from "react-router"
import Navbar from "../components/Navbar/Navbar"
import { Children } from "react"

const MainLayout = () => {
  return (
    <div >
      <Navbar/>
      <div className="flex flex-col items-center justify-center">

      <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout