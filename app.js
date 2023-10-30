'use strict'

function theName(){
    let username = prompt("What is your name?");
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
    let answer = prompt('Who is my favoite team? Dont include city names');
    while (answer.toLowerCase() != 'colts'){
        answer = prompt('Oops try again!');
    }

    console.log(answer)

    alert("Thats Correct!");
}


function imgloop(){
    let rating = prompt('How would you rate your teams performance so far this season? 1-5');

    for (let i = 0; i < rating; i++){
        document.write("<img src='touchdown.png' alt='Football pic'/>")
    }

}