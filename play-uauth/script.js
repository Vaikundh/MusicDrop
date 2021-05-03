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