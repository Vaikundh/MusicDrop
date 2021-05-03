const instuff = document.getElementsByClassName("in");
const outstuff = document.getElementsByClassName("out");

function fixdisplay(user) {
    if (user) {
        for (let i = 0; i < instuff.length; i++) {
            instuff[i].style.display = "none";
        }
        for (let i = 0; i < outstuff.length; i++) {
            outstuff[i].style.display = "block";
        }
    } else {
        for (let i = 0; i < instuff.length; i++) {
            instuff[i].style.display = "block";
        }
        for (let i = 0; i < outstuff.length; i++) {
            outstuff[i].style.display = "none";
        }
    }
}