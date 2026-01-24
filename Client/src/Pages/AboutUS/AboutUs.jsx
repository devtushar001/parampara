import { icons } from '../../assets/assets';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <>
            <section className="about-section">
                <div className="about-container">

                    {/* Logo & Title */}
                    <div className="about-header">
                        <img src={icons.plainlogo} />
                        <h1>About Parampara Marriage Garden</h1>
                        <p>Where traditions meet timeless elegance</p>
                    </div>

                    {/* Content */}
                    <div className="about-content">
                        <p>
                            Parampara Marriage Garden is a premium wedding and event venue
                            designed to celebrate life’s most precious moments with grace,
                            elegance, and grandeur. Surrounded by serene surroundings, our
                            venue blends traditional values with a modern, luxurious ambience.
                        </p>

                        <p>
                            From royal weddings to intimate family functions, we provide a
                            spacious, beautifully maintained garden with world-class facilities
                            that make every event memorable and stress-free.
                        </p>
                    </div>

                    {/* Highlights */}
                    <div className="about-highlights">
                        <div className="highlight-box">
                            <h3>🌿 Spacious Venue</h3>
                            <p>Perfect for grand weddings and large celebrations</p>
                        </div>

                        <div className="highlight-box">
                            <h3>✨ Elegant Ambience</h3>
                            <p>Aesthetic décor with a peaceful environment</p>
                        </div>

                        <div className="highlight-box">
                            <h3>🤝 Trusted Service</h3>
                            <p>Dedicated support to ensure flawless events</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default AboutUs;