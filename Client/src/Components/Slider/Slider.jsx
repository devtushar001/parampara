import { useEffect, useState } from 'react';
import { gardenSlider } from '../../assets/assets';
import './Slider.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider = () => {
    const [currentSlider, setCurrentSlider] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlider(prev =>
                (prev + 1) % gardenSlider.length
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="slider">
                <div className="left">
                    <div className="arrows">
                        <FaChevronLeft
                            onClick={() =>
                                setCurrentSlider(
                                    (prev) => (prev - 1 + gardenSlider.length) % gardenSlider.length
                                )
                            }
                            className="left-arrow"
                        />
                        <FaChevronRight
                            onClick={() =>
                                setCurrentSlider(
                                    (prev) => (prev + 1) % gardenSlider.length
                                )
                            }
                            className="right-arrow"
                        />
                    </div>
                    <img
                        key={currentSlider}
                        src={gardenSlider[currentSlider].image}
                        alt=""
                    />
                    <div className="content">
                        <h2>{gardenSlider[currentSlider].content}</h2>
                    </div>
                </div>
                <div className="right">
                    <div className="top">
                        <img
                            key={currentSlider}
                            src={gardenSlider[currentSlider].image}
                            alt=""
                        />
                    </div>
                    <div className="bottom">
                        <img
                            key={currentSlider}
                            src={gardenSlider[currentSlider].image}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider;