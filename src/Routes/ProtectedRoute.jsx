import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/useAuth"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const ProtectedRoute = () => {
    const { isAuthenticated} = useAuth();

    if(!isAuthenticated){
        return <Navigate to={"/"} replace/>        
    }

    //Continue with the inside routes, but first pass this function
    return (
        <>
            <NavBar/>
            <Outlet/>        
            <Footer/>
        </>

    )
    
}

export default ProtectedRoute