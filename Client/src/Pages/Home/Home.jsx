import ChooseUs from "../../Components/ChooseUs/ChooseUs";
import EventHost from "../../Components/EventHost/EventHost";
import Slider from "../../Components/Slider/Slider"
import VenueSpaces from "../../Components/VenueSpaces/VenueSpaces";
import CTA from "../../Components/CTA/CTA";
import './Home.css';
import Gallery from "../../Components/Gallery/Gallery";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
    return (
        <>
            <div className="home">
                <Slider />
                <ChooseUs />
                <VenueSpaces />
                <EventHost />
                <CTA />
                <Gallery/>
                <Testimonial/>
                {/* <Footer/> */}
            </div>
        </>
    )
}

export default Home;