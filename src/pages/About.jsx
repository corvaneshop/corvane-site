import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about-page">
            <section className="about-container">
                <div className="about-text">
                    <h1>About Corvane</h1>
                    <p>
                        Corvane is a creative studio that crafts immersive mystery and detective experiences.
                        Every story we build challenges the mind, invites curiosity, and rewards observation.
                    </p>
                    <p>
                        From psychological thrillers to family-friendly mysteries, our mission is simple:
                        turn your living room into a crime scene worth solving.
                    </p>
                </div>
                <div className="about-image">
                    <img
                        src="https://images.unsplash.com/photo-1508704019882-f9cf40e475b4?auto=format&fit=crop&w=900&q=80"
                        alt="About Corvane"
                    />
                </div>
            </section>
        </div>
    );
};

export default About;
