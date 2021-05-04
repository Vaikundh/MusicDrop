import React from "react";
import './PersonalPage.css';
import profilePic from './Images/profile.png';

function PersonalPage() {
    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card p-3">
                <div className="d-flex align-items-center">
                    <div className="image"> <img src={profilePic} className="rounded" width={155} /> </div>
                    <div className="ml-3 w-100">
                        <h4 className="mb-0 mt-0">Name Here</h4>
                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                            <div className="d-flex flex-column"> <span className="articles">Locations Visited</span> <span className="number1">38</span> </div>
                            <div className="d-flex flex-column"> <span className="followers">Songs Added</span> <span className="number2">980</span> </div>
                            <div className="d-flex flex-column"> <span className="rating">Upvotes</span> <span className="number3">8.9</span> </div>
                        </div>
                        <div className="button mt-2 d-flex flex-row align-items-center"> <button className="btn btn-sm btn-outline-primary w-100">Chat</button> <button className="btn btn-sm btn-primary w-100 ml-2">Follow</button> </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PersonalPage;
