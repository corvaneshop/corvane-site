import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about-page">
            <section className="about-hero">
                <h1 className="title">About Corvane</h1>
                <p className="subtitle">Where truth hides in the dark.</p>
            </section>

            <section className="about-container">
                <div className="about-text">
                    <h2>Who We Are</h2>
                    <p>
                        <strong>Corvane</strong> is an independent creative studio dedicated to crafting immersive
                        detective and mystery experiences that blur the line between fiction and reality.
                        Our stories are designed to awaken curiosity, test your perception, and pull you
                        deep into the shadows of the unknown.
                    </p>
                    <p>
                        From haunting psychological thrillers to lighthearted family mysteries,
                        each case we publish is a new doorway into the unseen.
                        Every puzzle is crafted with precision — every clue hides a piece of truth.
                    </p>
                </div>

                <div className="about-founder">
                    <h2>Meet the Creator</h2>
                    <p>
                        <strong>Corvus</strong>, the mind behind Corvane, began creating mystery experiences in <strong>2021</strong>.
                        Fascinated by human behavior, secrets, and the fragile boundary between guilt and innocence,
                        Corvus turned a lifelong passion for storytelling into a universe of interactive crime files.
                    </p>
                    <p>
                        His vision was clear: to design printable mysteries that anyone could play at home,
                        yet feel as gripping and cinematic as a real investigation.
                        Every Corvane game carries his signature — atmospheric writing, hidden symbolism,
                        and a faint echo of tragedy.
                    </p>
                </div>

                <div className="about-contact">
                    <h2>Connect With Us</h2>
                    <p>
                        💌 <strong>Email:</strong>{" "}
                        <a href="mailto:corvane.shop@gmail.com">corvane.shop@gmail.com</a>
                    </p>
                    <p>
                        🕵️‍♂️ <strong>Visit our store:</strong>{" "}
                        <a
                            href="https://www.etsy.com/shop/CorvaneGame"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            etsy.com/shop/CorvaneGame
                        </a>
                    </p>
                </div>
            </section>

            <footer className="about-footer">
                <p>
                    © {new Date().getFullYear()} Corvane — Crafted in the shadows by Corvus.
                </p>
            </footer>
        </div>
    );
};

export default About;
