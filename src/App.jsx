import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>    
          <Route path="/blog" element = {<BlogPage/>}/>    
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}