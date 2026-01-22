import { gardenSlider } from '../../assets/assets';
import './Slider.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider = () => {
    return (
        <>
            <div className="slider">
                <div className="left">
                    <div className="arrows">
                        <FaChevronLeft className='left-arrow' />
                        <FaChevronRight className='right-arrow' />
                    </div>
                    <img src={gardenSlider[0].image} alt="" />
                    <p>{gardenSlider[0].content}</p>
                </div>
                <div className="right">
                    <div className="top">
                        <img src={gardenSlider[0].image} alt="" />
                    </div>
                    <div className="bottom">
                        <img src={gardenSlider[0].image} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider;