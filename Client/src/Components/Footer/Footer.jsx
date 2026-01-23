import './Footer.css';


const Footer = () => {
    return (
        <>
            <footer class="footer">
                <div class="footer-container">

                    <div class="footer-col">
                        <h4>Gallery</h4>
                        <ul>
                            <li><a href="#">Garden</a></li>
                            <li><a href="#">D-Cafe</a></li>
                            <li><a href="#">Lawn's</a></li>
                            <li><a href="#">Rooms</a></li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h4>Marketplace</h4>
                        <ul>
                            <li><a href="#">Trending</a></li>
                            <li><a href="#">Best Selling</a></li>
                            <li><a href="#">Latest</a></li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h4>Magazine</h4>
                        <ul>
                            <li><a href="#">Art Skills</a></li>
                            <li><a href="#">Career</a></li>
                            <li><a href="#">Inspiration</a></li>
                            <li><a href="#">News</a></li>
                        </ul>
                    </div>

                    <div class="footer-col newsletter">
                        <h4>Newsletter</h4>
                        <p>
                            Subscribe to our newsletter to get your weekly dose of news,
                            updates, tips and special offers.
                        </p>

                        <form class="newsletter-form">
                            <input type="email" placeholder="Enter your email address" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>

                </div>

                <div class="footer-bottom">
                    <p>Privacy Policy · Terms and Conditions</p>
                    <p>Dribbble · Behance · Instagram</p>
                </div>
            </footer>

        </>
    )
}

export default Footer;