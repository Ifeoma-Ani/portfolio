import React from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Ifeoma Ani</h1>
        <p>
          I am a student of DCI Berlin, currently studying web development and I
          will be done in November. Passionate about frontend development,
          teamwork, and continuous learning.
        </p>
      </header>

      <section className="section">
        <h2>Projects</h2>
        <ul>
          <li>
            <a
              href="https://github.com/Ifeoma-Ani"
              target="_blank"
              rel="noopener noreferrer"
            >
              View school assignments and projects on my GitHub
            </a>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React (in progress)</li>
          <li>Linux terminal basics</li>
          <li>Agile & Scrum</li>
          <li>Version control with Git & GitHub</li>
        </ul>
      </section>

      <section className="section">
        <h2>Contact Me</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows="4"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <section className="section">
        <h2>Connect with Me</h2>
        <div className="social-links">
          <a
            href="https://github.com/Ifeoma-Ani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} /> GitHub
          </a>
        </div>
      </section>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Ifeoma Ani. All rights reserved.
      </footer>
    </div>
  );
}

