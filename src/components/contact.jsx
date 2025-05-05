import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../assets/style/contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_llrvfbk', 'template_9ii4upd', form.current, 'L2-T0m6pUTm5gqAeD')
      .then((result) => {
          alert('Message sent successfully!');
          form.current.reset();
      }, (error) => {
          alert('Failed to send the message. Please try again.');
      });
  };

  return (
    <div className="contact-section">
      <h2>Contact Me</h2>
      <p className="contact-subtext">I'd love to hear from you! Fill out the form below to get in touch.</p>

      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <input type="text" name="subject" placeholder="Subject" />
        <textarea name="message" placeholder="Your Message" rows="5" required />
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
