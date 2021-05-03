import React from "react";
import Header from './Header.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'

function PersonalPage() {
    return (
        <div className="personalPage">
        <Header />
        <hr />
        <About />
        <br />
        <hr />
        <h1 id="contactnav" className="contact">Contact Information</h1>
        <hr />
        <Contact />

        </div>
    );
}

export default PersonalPage;
