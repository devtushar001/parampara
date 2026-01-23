
import { gardenSlider } from '../../assets/assets';
import './Gallery.css';

const Gallery = () => {
    return (
        <>

            <section class="gallery">
                <h2>Gallery</h2>
                <p class="subtitle">
                    Moments captured from beautiful celebrations at Parampara Marriage Garden
                </p>

                <div class="gallery-grid">
                    <div class="gallery-item">
                        <img src={gardenSlider[1].image} alt="Wedding Ceremony" />
                        <p>Contet</p>
                    </div>
                    <div class="gallery-item">
                        <img src={gardenSlider[1].image} alt="Reception Event" />
                        <p>Contet</p>
                    </div>
                    <div class="gallery-item">
                        <img src={gardenSlider[1].image} alt="Stage Decoration" />
                        <p>Contet</p>
                    </div>
                    <div class="gallery-item">
                        <img src={gardenSlider[1].image} alt="Garden View" />
                        <p>Contet</p>
                    </div>
                    <div class="gallery-item">
                        <img src={gardenSlider[1].image} alt="Haldi Ceremony" />
                        <p>Contet</p>
                    </div>
                    <div class="gallery-item">
                        <img src={gardenSlider[1].image} alt="Night Event Lighting" />
                        <p>Contet</p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Gallery;