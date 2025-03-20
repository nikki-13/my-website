import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-dark text-whited-flex justify-content-center align-items-center vh-100 bg-dark text-white">
      <h1 className="mb-4">Contact Me:</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Your Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="What's your Name?"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Your Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="What's your Email?"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Your Message:</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            placeholder="What's your message?"
            value={formData.message}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
}

export default Contact;