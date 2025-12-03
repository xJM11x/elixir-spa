import { Outlet } from "react-router-dom"
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
    return(
        <div className="flex bg-amber-300 w-full h-full">
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout;