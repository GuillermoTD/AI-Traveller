import { Outlet } from "react-router"
import Navbar from "../components/Navbar/Navbar"
import { Children } from "react"

const MainLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default MainLayout