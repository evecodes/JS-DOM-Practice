// Button one actions
const buttonOne = document.querySelector("#btn1");

buttonOne.addEventListener("click", e => {
    buttonOne.classList.toggle('button-one');
    buttonOne.classList.toggle('button-one-alive');
});


// Button two actions
// Pull up menu and able to click it away


// Button three actions
const buttonThree = document.querySelector("#btn3");
const titleTop = document.querySelector(".title");

buttonThree.addEventListener("click", e => {
    document.querySelector("h1").style.color = randomColor();    
});

function randomColor() {
    return "rgb(" + Math.floor(Math.random()*254) + "," + Math.floor(Math.random()*254)  + "," + Math.floor(Math.random()*254) + ")";
}

titleTop.style.transition = "all 0.1s ease";

// Button four actions
const buttonFour = document.querySelector("#btn4");
const hiddenMessage = document.querySelector("#hidden-message");

buttonFour.addEventListener("click", e => {
    buttonFour.classList.toggle('hide-button');
    hiddenMessage.classList.toggle('hide-message');
    timeout = setTimeout(retrieveBtn, 1000);
});

function retrieveBtn() {
    buttonFour.classList.toggle('hide-button');
    hiddenMessage.classList.toggle('hide-message');
}

// Hidden title button actions
const hiddenButton = document.querySelector(".hidden-button");
const gridBox = document.querySelector(".gridbox");

hiddenButton.addEventListener("click", e => {
    gridBox.style.backgroundColor = "red";
});
// = Placeholder button action