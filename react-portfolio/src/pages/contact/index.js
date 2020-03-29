import React from "react"
import "./style.css"

function Contact() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12"><h2>Contact</h2></div>
            </div>
            <div className="row">
                <div class="col-12">
                    <h3>My Pages</h3>
                    <a href="https://github.com/Bethanjames93">GitHub</a>
                    <a href="www.linkedin.com/in/bethanjames">LinkedIn</a>
                </div>
            </div>
            <div className="row">
                <div class="col-12">
                    <h3>My CV</h3>
                    <a href="assets/resume.pdf">CV</a>
                </div>
            </div>
            <div className="row">
                <div class="col-12">
                    <h3>My Email</h3>
                    <a href="bethanjames93@icloud.com">bethanjames93@icloud.com</a>
                </div>
            </div>
        </div>

    );
}

export default Contact