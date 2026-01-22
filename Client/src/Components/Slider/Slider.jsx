import { gardenSlider } from '../../assets/assets';
import './Slider.css';
const Slider = () => {
    return (
        <>
            <div className="slider">
                <div className="left">
                    <div className="arrow-left">

                    </div>
                    <img src={gardenSlider[0].image} alt="" />
                    <p>{gardenSlider[0].content}</p>
                    <div className="arrow-right">

                    </div>
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