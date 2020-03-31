import React from "react";
import "./style.css"

function Projects() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12"><h2>My Projects</h2></div>

            <div className="row"> 
                <div className="col-4">
                    <div className="card">
                        <div class="card-body">
                            <h4>Living in the Scene</h4>
                            <p><a href="https://github.com/beenish-mha/Living-in-the-scene">GitHub Repo</a></p>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card">
                        <div class="card-body">
                            <h4>DripAdvisor</h4>
                            <p><a href="https://github.com/Bethanjames93/bootcamp_beeefcakes">GitHub Repo</a></p>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card">
                        <div class="card-body">
                            <h4>Eat da burger</h4>
                            <p><a href="https://github.com/Bethanjames93/eat_da_burger">GitHub Repo</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                        <div className="card">
                            <div class="card-body">
                                <h4>Budget Tracker</h4>
                                <p><a href="https://github.com/Bethanjames93/budget_tracker">GitHub Repo</a></p>
                            </div>
                        </div>
                </div>

                <div className="col-4">
                    <div className="card">
                        <div class="card-body">
                            <h4>Weather Dashboard</h4>
                            <p><a href="https://github.com/Bethanjames93/weatherdashboard">GitHub Repo</a></p>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card">
                        <div class="card-body">
                            <h4>Workout Tracker</h4>
                            <p><a href="https://github.com/Bethanjames93/workout_tracker">GitHub Repo</a></p>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
}

export default Projects