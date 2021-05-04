import React from 'react';
import './login.css';
/*const Div =()=>{
    
     <div>
        <script src="https://www.gstatic.com/firebasejs/8.4.3/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.4.3/firebase-auth.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.4.3/firebase-firestore.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.4.3/firebase-analytics.js"></script>
        <script>
            // Your web app's Firebase configuration
            // For Firebase JS SDK v7.20.0 and later, measurementId is optional
            var firebaseConfig = {
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
            firebase.analytics();

        </script>
     </div>}*/



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
/*
const auth = firebase.auth();
const db = firebase.firestore();

// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        db.collection('users').doc(user.uid).onSnapshot(doc => {
            fixdisplay(user, doc.data());
        }, err => {
            console.log(error.message)
        });
    } else {
        fixdisplay();
    }
})


// signup
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
});

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



const Div =()=>(
    
    <div>
  <h1>Log In</h1>
  <form id="login-form">
      <div className="input-field">
          <input type="email" id="login-email" placeholder="Email address" required />
      </div>
      <div className="input-field">
          <input type="password" id="login-password" placeholder="Password" required />
      </div>
      <button className="butt">Log In</button>
  </form>
</div>
)
*/
const login = () => (
    <div className="box">
        <div className="header">Log In</div>
        <div className="header">No account? Sign up</div>
        
        <form>
            <input type="text" id="subtotal" placeholder="Email Address"/>
        </form>
        <form>
            <input type="text" id="tax" placeholder="Password"/>
        </form>
    </div>
    


)
export default login;
