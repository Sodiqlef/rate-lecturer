import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"


const LayOut = () => {
  return (
    <div>
      <Header />
        <Outlet />
      <Footer />
    </div>
  )
}

export default LayOut