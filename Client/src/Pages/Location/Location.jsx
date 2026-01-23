import './Location.css'


const Location = () => {
    return (
        <>
            <section class="location-page">
                <div class="location-container">

                    <div class="location-info">
                        <h2>Find Us Easily</h2>
                        <p class="tagline">
                            Visit Parampara Marriage Garden and experience elegance,
                            tradition, and celebration at the perfect location.
                        </p>

                        <div class="address-box">
                            <h3>📍 Our Address</h3>
                            <p>
                                Parampara Marriage Garden<br />
                                Ratibad Road, Near Bhopal<br />
                                Madhya Pradesh, India
                            </p>
                        </div>

                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Parampara+Marriage+Garden+Ratibad+Bhopal"
                            target="_blank"
                            class="map-btn"
                        >
                            Open in Google Maps
                        </a>
                    </div>

                    <div class="map-box">
                        <iframe
                            src="https://www.google.com/maps?q=Parampara%20Marriage%20Garden%20Ratibad%20Bhopal&output=embed"
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Location;