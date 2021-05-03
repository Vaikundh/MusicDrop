const auth = firebase.auth();
const db = firebase.firestore();

// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        fixdisplay(user);
    } else {
        fixdisplay();
    }
})

// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    // sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
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