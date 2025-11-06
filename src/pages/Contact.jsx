import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <p>Have a question or collaboration idea? Let’s talk.</p>

            <form
                className="contact-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    alert("Message sent successfully!");
                }}
            >
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Email Address" required />
                <textarea placeholder="Message" rows="5" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
