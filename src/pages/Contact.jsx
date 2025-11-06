import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "Website",     // 🔹 EmailJS -> Email Services altındaki Service ID
                "template_f2qw6pk",    // 🔹 EmailJS -> Email Templates altındaki Template ID
                form.current,
                "DCIqtJ5lCq6j4QRIY"    // 🔹 EmailJS -> Account -> Public Key
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("✅ Message sent successfully!");
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                    alert("❌ Something went wrong: " + error.text);
                }
            );
    };

    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <p>Have a question, feedback, or collaboration idea? Let’s talk.</p>

            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Email Address" required />
                <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                <button type="submit">Send Message</button>
            </form>

            <div className="contact-info">
                <p>📧 <strong>Email:</strong> corvane.shop@gmail.com</p>
                <p>
                    🕵️‍♀️ <strong>Etsy Store:</strong>{" "}
                    <a
                        href="https://www.etsy.com/shop/CorvaneGame"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        etsy.com/shop/CorvaneGame
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Contact;
