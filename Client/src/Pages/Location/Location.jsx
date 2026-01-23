import './Location.css'


const Location = () => {
    return (
        <>
            <section className="location-section">
                <div className="location-container">

                    {/* Left Content */}
                    <div className="location-content">
                        <h2>Find Us Easily</h2>
                        <p>
                            Parampara Marriage Garden is located in a peaceful and elegant
                            environment, perfect for weddings and grand celebrations.
                        </p>

                        <div className="address-box">
                            <h4>📍 Our Address</h4>
                            <p>
                                Parampara Marriage Garden <br />
                                Ratibad Road, Bhopal <br />
                                Madhya Pradesh, India
                            </p>
                        </div>

                        <a
                            href="https://www.google.com/maps"
                            target="_blank"
                            rel="noreferrer"
                            className="map-btn"
                        >
                            Open in Google Maps
                        </a>
                    </div>

                    {/* Right Map */}
                    <div className="map-container">
                        <iframe
                            title="Parampara Location"
                            src="https://www.google.com/maps?q=Ratibad%20Bhopal&output=embed"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Location;