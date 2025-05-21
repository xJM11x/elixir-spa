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
import Prueba from "./pages/Prueba";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>    
        <Route path="/blog" element = {<BlogPage/>}/>
        <Route path="/article/:id" element = {<ArticlePage/>}/>
        <Route path="/services" element = {<ServicesPage/>}/>
        <Route path="/serviceDetail/:id" element={<ServiceDetailPage/>}/>
        <Route path="/reservation" element={<ReservetionPage/>}/>
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/privacity" element={<PrivacityPage/>}/>
        <Route path="*" element={<HomePage/>}/>
        <Route path="/prueba" element = {<Prueba/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}