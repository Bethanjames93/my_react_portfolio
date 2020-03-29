import React from "react";
import "./style.css"

function About() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">About Me</div>
            </div>
            <div className="row">
                <div class="col-5" src="../public/assets/imageofme.jpg" title="Image of me"></div>
                <div class="col-7">
                    <h2>Welcome to my Portfolio</h2>
                    <p>My name is Bethan James, I am currently studying at Manchester University taking part in an intense 24 week bootcamp.</p>
                    <p>I hope you enjoy looking through my portfolio! If you visit the Projects page you can take a look at some of the things I have created during my time at the bootcamp</p>
                    <p>Take a look at my CV, GitHub and LinkedIn account on my contact page.</p>
                    <p>I am currently looking for a position in Manchester</p>
                </div>
            </div>
        </div>

    );
}

export default About;