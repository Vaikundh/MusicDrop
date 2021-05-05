import React, { useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import './login.css';
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";


const LoginForm = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyCLgj9054PJz9gh8WhkJkQcr1gY2pzPAIM",
        authDomain: "playlist-e363a.firebaseapp.com",
        projectId: "playlist-e363a",
        storageBucket: "playlist-e363a.appspot.com",
        messagingSenderId: "821399492309",
        appId: "1:821399492309:web:06d8eb435c88e509a7345c",
        // measurementId: "G-85VW1TPZ5T"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }
    //firebase.analytics();
    const auth = firebase.auth();
    const db = firebase.firestore();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const doLogIn = (e) => {

        // sign up the user and add to the database using unique userID
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(cred => {
            console.log(cred);
        }).then(() => {
            console.log("hello");
            window.location.href = "/Map";
            // reset form to blank inputs
            // signupForm.reset();
        }).catch(err => {
            alert(err.message);
        });
    }


    return (
        <form>
            <input
                type="text"
                className="form-control mb-2 mr-sm-2 mb-sm-0"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Link to="/Map">
                <button
                    onClick={doLogIn}
                    type="submit"
                    className="btn btn-primary">LogIn
            </button>
            </Link>
        </form>
    );
}

export default LoginForm


