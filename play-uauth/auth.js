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
    e.preventDefault();

    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    // sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        return db.collection('users').doc(cred.user.uid).set({
            photoURL: signupForm['signup-photoURL'].value,
            locations: 0,
            added: 0,
            upvotes: 0
        });
    }).then(() => {
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