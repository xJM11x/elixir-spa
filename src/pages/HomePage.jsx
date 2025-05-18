import Footer from "../components/Footer";
import About from "./HomePage/About";
import Blog from "./HomePage/Blog";
import Hero from "./HomePage/Hero";
import Review from "./HomePage/Review";
import Services from "./HomePage/Services";

const HomePage = () => {
    return(
        <div>
            <Hero/>
            <About/>
            <Services/>
            <Blog/>
            <Review/>
            <Footer/>
        </div>
    )
}

export default HomePage;