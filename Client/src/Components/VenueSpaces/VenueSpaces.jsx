import { gardenSlider } from "../../assets/assets";
import './VenueSpaces.css';

const VenueSpaces = () => {
    return (
        <>
            <section class="venue-spaces">
                <h2>Venue Spaces</h2>
                <p class="subtitle">
                    Beautifully designed spaces for every wedding ritual and celebration
                </p>

                <div class="spaces-grid">
                    <div class="space-card">
                        <img src={gardenSlider[0].image} alt="Main Garden Area" />
                        <div class="space-content">
                            <h3>Main Garden Area</h3>
                            <p>
                                A spacious open lawn ideal for grand weddings, receptions,
                                and large gatherings under the open sky.
                            </p>
                        </div>
                    </div>

                    <div class="space-card">
                        <img src={gardenSlider[0].image} alt="Main Garden Area" />

                        <div class="space-content">
                            <h3>Wedding Stage</h3>
                            <p>
                                Elegantly designed stage area perfect for varmala,
                                pheras, and main wedding ceremonies.
                            </p>
                        </div>
                    </div>

                    <div class="space-card">
                        <img src={gardenSlider[0].image} alt="Main Garden Area" />

                        <div class="space-content">
                            <h3>Dining Area</h3>
                            <p>
                                Comfortable and well-planned dining space ensuring smooth
                                service for all guests.
                            </p>
                        </div>
                    </div>

                    <div class="space-card">
                        <img src={gardenSlider[0].image} alt="Main Garden Area" />

                        <div class="space-content">
                            <h3>Parking Area</h3>
                            <p>
                                Ample and secure parking space for guests,
                                providing convenience and peace of mind.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default VenueSpaces;