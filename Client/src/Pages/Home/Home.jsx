import ChooseUs from "../../Components/ChooseUs/ChooseUs";
import Slider from "../../Components/Slider/Slider"
import VenueSpaces from "../../Components/VenueSpaces/VenueSpaces";
import './Home.css';

const Home = () => {
    return (
        <>
            <div className="home">
                <Slider />
                <ChooseUs />
                <VenueSpaces />
            </div>
        </>
    )
}

export default Home;