import { FaAddressCard } from "react-icons/fa";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l1g7ggg",
        "template_08a3zdp",
        form.current,
        "PJMRseLhxM-aTIIX1"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <div>
        <h1 className="contactTitle">Contact Me</h1>
        <span className="contactDetails">
          Fill out the form below to discuss any work opportunities
        </span>
        <form onSubmit={sendEmail} ref={form} className="contactForm">
          <input
            type="text"
            className="name"
            name="from_name"
            placeholder="Your Name"
          />
          <input
            type="text"
            className="email"
            name="from_email"
            placeholder="Your Email"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="msg"
            rows={5}
          />
          <button className="submitbtn" value="Send" type="submit">
            Submit
          </button>
          <div className="links">
            <FaAddressCard />
          </div>
        </form>
      </div>
    </section>
  );
}
