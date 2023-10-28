'use strict'

function theName(){
    const username = prompt("What is your name?");
    if (username == "") {
        username = prompt("Please enter a valid name");
    } else if (username == "Cameron") {
        alert("Hey Cameron");
    } else if (username == "Halley") {
        alert("Hi baby, I love you very much");
    } else {
        alert("Welcome to my site");
    }
    return username;
}

let theuser = theName();

function favteam(){
    if (confirm("Is your Favorite Team the Carolina Panthers?")) {
        document.write("Yikes...Better luck next year &#128531");
    } else {
        document.write("I hope your team wins their next game!");
    }
}
