import React from 'react';
import './login.css';
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCLgj9054PJz9gh8WhkJkQcr1gY2pzPAIM",
            authDomain: "playlist-e363a.firebaseapp.com",
            projectId: "playlist-e363a",
            storageBucket: "playlist-e363a.appspot.com",
            messagingSenderId: "821399492309",
            appId: "1:821399492309:web:06d8eb435c88e509a7345c",
            // measurementId: "G-85VW1TPZ5T"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default function Login() {
    const auth = firebase.auth();
    const db = firebase.firestore();

    const instuff = document.getElementsByClassName("in");
    const outstuff = document.getElementsByClassName("out");
    const username = document.getElementById("username");
    const locations = document.getElementById("locations");
    const added = document.getElementById("added");
    const upvotes = document.getElementById("upvotes");
    const profilepic = document.getElementById("profile-pic");

    function fixdisplay(user, data) {
        if (user) {
            // hide signin and login div
            for (let i = 0; i < instuff.length; i++) {
                instuff[i].style.display = "none";
            }
            // display profile section and log out button
            for (let i = 0; i < outstuff.length; i++) {
                outstuff[i].style.display = "block";
            }

            // display profile stuff
            username.innerHTML = user["email"];
            profilepic.src = data["photoURL"];
            locations.innerHTML = "Locations visited: " + data["locations"];
            added.innerHTML = "Songs added: " + data["added"];
            upvotes.innerHTML = "Upvotes: " + data["upvotes"];

        } else {
            for (let i = 0; i < instuff.length; i++) {
                instuff[i].style.display = "block";
            }
            for (let i = 0; i < outstuff.length; i++) {
                outstuff[i].style.display = "none";
            }
        }
    }


    // listen for auth status changes
    auth.onAuthStateChanged(user => {
        if (user) {
            db.collection('users').doc(user.uid).onSnapshot(doc => {
                fixdisplay(user, doc.data());
            }, err => {
                console.log(err.message)
            });
        } else {
            fixdisplay();
        }
    })

    // signup
    /*
    const signupForm = document.querySelector('#signup-form');
    signupForm.addEventListener('submit', (e) => {
        // this is to stop the page from refreshing when form is submitted
        e.preventDefault();

        // get user info
        const email = signupForm['signup-email'].value;
        const password = signupForm['signup-password'].value;

        // sign up the user and add to the database using unique userID
        auth.createUserWithEmailAndPassword(email, password).then(cred => {
            return db.collection('users').doc(cred.user.uid).set({
                photoURL: signupForm['signup-photoURL'].value,
                locations: 0,
                added: 0,
                upvotes: 0
            });
        }).then(() => {
            // reset form to blank inputs
            signupForm.reset();
        }).catch(err => {
            alert(err.message);
        })
    });

    // logout
    const logout = document.querySelector('#logout');
    logout.addEventListener('click', (e) => {
        e.preventDefault();
        auth.signOut();
    });*/

    // login
    const loginForm = document.querySelector('#login-form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // get user info
        const email = loginForm['login-email'].value;
        const password = loginForm['login-password'].value;

        // log the user in
        auth.signInWithEmailAndPassword(email, password).then((cred) => {
            loginForm.reset();
        }).catch(err => {
            alert(err.message);
        });

    });







    return (
        <div className="box">
            <div class="login-container in">
            <h1>Log In</h1>
            <form id="login-form">
                <div class="input-field">
                    <input type="email" id="login-email" placeholder="Email address" required />
                </div>
                <div class="input-field">
                    <input type="password" id="login-password" placeholder="Password" required />
                </div>
                <button class="butt">Log In</button>
            </form>
            
        </div>
        </div>
        


    )
}
//export default login;
