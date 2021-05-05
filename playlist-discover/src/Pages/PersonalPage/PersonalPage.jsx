import React from "react";
import './PersonalPage.css';
import profilePic from './Images/profile.png';

function PersonalPage() {
    return (
        <div>
            <div id="name">
                <h3 id="name">Some Name Here</h3>
            </div>
            <div className="container mt-5 d-flex justify-content-center">
                <div className="card p-3">
                    <div className="d-flex align-items-center">
                        <div className="image"> <img src={profilePic} className="rounded" width={155} /> </div>
                        <div className="ml-3 w-100">
                            <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                <div className="d-flex flex-column"> <span className="titles">Locations Visited</span> <span className="number2">31</span> </div>
                                <div className="d-flex flex-column"> <span className="titles">Songs Added</span> <span className="number1">42</span> </div>
                                <div className="d-flex flex-column"> <span className="titles">Total Upvotes</span> <span className="number3">72</span> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalPage;
