import './Testimonial.css';


const Testimonial = () => {
    return (
        <>
            <section class="testimonials">
                <h2>What Our Guests Say</h2>
                <p class="subtitle">
                    Heartfelt words from families who celebrated their special moments with us
                </p>

                <div class="testimonials-grid">
                    <div class="testimonial-card">
                        <p class="message">
                            “Parampara Marriage Garden is truly beautiful. The arrangements,
                            ambience, and management were excellent. Our wedding day was perfect.”
                        </p>
                        <h4>— Rohit & Neha</h4>
                        <span>Wedding Ceremony</span>
                    </div>

                    <div class="testimonial-card">
                        <p class="message">
                            “Spacious garden, great parking, and smooth coordination.
                            All our guests were very happy with the venue.”
                        </p>
                        <h4>— Amit Sharma</h4>
                        <span>Reception Event</span>
                    </div>

                    <div class="testimonial-card">
                        <p class="message">
                            “A perfect place for traditional functions. The ambience
                            added a special charm to our engagement ceremony.”
                        </p>
                        <h4>— Pooja Verma</h4>
                        <span>Engagement Ceremony</span>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Testimonial;