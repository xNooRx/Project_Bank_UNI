import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import './App.css'; // Import the CSS for styling

const About = () => {
  return (
    <div className="about-page">
      <h1 className="about-title">About Me</h1>
      <div className="about-content">
        <div className="about-card">
          <h2>Who Am I?</h2>
          <p>
            Hello! I'm a passionate developer with a love for creating beautiful and functional web applications. 
            I specialize in front-end development using modern technologies like React, CSS, and JavaScript. 
            My goal is to build user-friendly and visually appealing interfaces that make a difference.
          </p>
        </div>
        <div className="about-card">
          <h2>How This Webpage Works</h2>
          <p>
            This webpage is designed to provide a seamless experience for users. Here's how it works:
          </p>
          <ul>
            <li>
              <strong>Header:</strong> The header contains navigation links to help you explore the site.
            </li>
            <li>
              <strong>Sidebar:</strong> The sidebar provides quick access to important sections of the site.
            </li>
            <li>
              <strong>Gallery:</strong> The gallery showcases templates that you can download and use.
            </li>
            <li>
              <strong>About Page:</strong> This page provides information about me and how the site works.
            </li>
          </ul>
        </div>
      </div>
      <div className="about-actions">
        <Link to="/" className="about-button">Back to Home</Link>
      </div>
    </div>
  );
};

export default About;