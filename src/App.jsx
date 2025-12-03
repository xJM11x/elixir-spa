import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import ArticlePage from "./pages/ArticlePage";
import ScrollToTop from "./components/ScrollToTop";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ReservetionPage from "./pages/ReservationPage";
import SuccessPage from "./pages/SuccessPage";
import PrivacityPage from "./pages/PrivacityPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";
import { Layout } from "lucide-react";
import ProtectedRoute from "./Routes/ProtectedRoute";

export default function App() {
  return (
  <AuthProvider>
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>

        <Route path="/" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
          
          <Route element={<ProtectedRoute />}>
              <Route path="/home" element={<HomePage/>}/>    
              <Route path="/blog" element = {<BlogPage/>}/>
              <Route path="/article/:id" element = {<ArticlePage/>}/>
              <Route path="/services" element = {<ServicesPage/>}/>
              <Route path="/serviceDetail/:id" element={<ServiceDetailPage/>}/>
              <Route path="/reservation" element={<ReservetionPage/>}/>
              <Route path="/success" element={<SuccessPage />} />
              <Route path="/privacity" element={<PrivacityPage/>}/>

          </Route>

      </Routes>
    </BrowserRouter>
  </AuthProvider>  
  )
}