import React from "react"
import "./style.css"

function Contact() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12"><h2>Contact Me</h2></div>
                <ul>
                    <li><a href="https://github.com/Bethanjames93">GitHub</a></li>
                    <li><a href="www.linkedin.com/in/bethanjames">LinkedIn</a></li>
                    <li><a href="bethanjames93@icloud.com">bethanjames93@icloud.com</a></li>
                </ul>
            </div>
    
            <div className="row">
                <div className="col-12">
                    <h3>My CV</h3>
                    <p>Heres a PDF link to my <a href="Assets/resume.pdf">CV</a></p>
                </div>
            </div>
  
        </div>

    );
}

export default Contact