import React, { useState } from "react";
import logo from "../images/crossLogo.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "",
    pestType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://formspree.io/f/movjvwzw", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Message sent successfully!");
        } else {
          alert("Something went wrong, please try again!");
        }
      })
      .catch(() => {
        alert("Failed to send message.");
      });
  };

  return (
    <div className="container">
      <div className="advert-container">
        <div className="advert-content">
          <img src={logo} alt="Cross City Pest Management Logo" />
          <h1 style={{ color: "black" }}>718-306-7108</h1>
          <h2>
            🌟 Protect Your Home and Business with Cross City Pest Management!
            🌟
          </h2>
          <p>
            Are pests invading your home or business? At{" "}
            <strong>Cross City Pest Management</strong>, we understand the
            importance of a pest-free environment, and we’re here to help you
            take back control.
          </p>

          <div className="section">
            <h2>🔧 Expert Pest Control Services</h2>
            <p>
              Whether it's ants, rodents, termites, or any other pests, our team
              of certified professionals has the knowledge and tools to tackle
              the job efficiently and safely. We specialize in residential and
              commercial pest control, offering tailored solutions to meet your
              specific needs.
            </p>
          </div>

          <div className="section">
            <h2>🌱 Eco-Friendly & Safe Solutions</h2>
            <p>
              We prioritize the health of your family, pets, and the
              environment. Our pest control methods are eco-friendly and
              non-toxic, ensuring a safe and effective treatment.
            </p>
          </div>

          <div className="cta">
            <h3>Get a Free Quote Today!</h3>
            <p>
              Don't let pests take over your home or business. Contact us today
              for a FREE quote and discover why we're the trusted pest
              management experts in the area!
            </p>
            <p>
              📞 Call now at <h2>718-306-7108</h2>
            </p>
            <p>
              🌐 Visit us at{" "}
              <strong>
                <a href="http://crosscitypest.com">crosscitypest</a>
              </strong>
            </p>
          </div>
        </div>
      </div>

      <form className="schedule-form" onSubmit={handleSubmit}>
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Schedule Our Services
        </h1>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Optional"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="pestType">What Treatment Do You Require:</label>
          <input
            id="pestType"
            type="text"
            name="pestType"
            value={formData.pestType}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">When Do You Want This Treated?:</label>
          <input
            id="date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            id="address"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="street, apt, city, zipcode, state"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
