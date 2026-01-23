import { gardenSlider } from "../../assets/assets"
import './EventHost.css';

const EventHost = () => {
    return (
        <>
            <section class="events-host">
                <h2>EVENTS WE HOST</h2>
                <p class="subtitle">
                    Elegant spaces for every celebration and tradition
                </p>

                <div class="events-grid">
                    <div class="event-card">
                        <img src={gardenSlider[0].image} alt="Main Garden Area" />
                        <div class="event-content">
                            <h3>Weddings</h3>
                            <p>
                                A grand setting for traditional wedding ceremonies,
                                making your special day truly memorable.
                            </p>
                        </div>
                    </div>

                    <div class="event-card">
                        <img src={gardenSlider[0].image} alt="Main Garden Area" />
                        <div class="event-content">
                            <h3>Receptions</h3>
                            <p>
                                Celebrate with family and friends in a beautifully
                                arranged reception space.
                            </p>
                        </div>
                    </div>

                    <div class="event-card">
                        <img src={gardenSlider[0].image} alt="Main Garden Area" />
                        <div class="event-content">
                            <h3>Engagement Ceremonies</h3>
                            <p>
                                A perfect venue for ring ceremonies and joyful
                                pre-wedding celebrations.
                            </p>
                        </div>
                    </div>

                    <div class="event-card">
                        <img src={gardenSlider[0].image} alt="Main Garden Area" />
                        <div class="event-content">
                            <h3>Haldi & Mehendi</h3>
                            <p>
                                Vibrant and colorful functions hosted in a warm
                                and traditional ambience.
                            </p>
                        </div>
                    </div>

                    <div class="event-card">
                        <img src={gardenSlider[0].image} alt="Main Garden Area" />
                        <div class="event-content">
                            <h3>Anniversaries</h3>
                            <p>
                                Celebrate milestones of togetherness in an elegant
                                and peaceful environment.
                            </p>
                        </div>
                    </div>

                    <div class="event-card">
                        <img src={gardenSlider[0].image} alt="Main Garden Area" />
                        <div class="event-content">
                            <h3>Family Functions</h3>
                            <p>
                                Ideal for birthdays, naming ceremonies, and
                                other family gatherings.
                            </p>
                        </div>
                    </div>
                     <div class="event-card">
                        <img src={gardenSlider[0].image} alt="Main Garden Area" />
                        <div class="event-content">
                            <h3>Birthdays Parties</h3>
                            <p>
                                A grand setting for traditional wedding ceremonies,
                                making your special day truly memorable.
                            </p>
                        </div>
                    </div>
                     <div class="event-card">
                        <img src={gardenSlider[0].image} alt="Main Garden Area" />
                        <div class="event-content">
                            <h3>Breakup Parties</h3>
                            <p>
                                A grand setting for traditional wedding ceremonies,
                                making your special day truly memorable.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EventHost;