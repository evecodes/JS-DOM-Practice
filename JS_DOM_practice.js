// Button one actions
const buttonOne = document.querySelector("#btn1");
const titleTop = document.querySelector(".title");

buttonOne.addEventListener("click", e => {
    document.querySelector("h1").style.color = randomColor();    
});

function randomColor() {
    return "rgb(" + Math.floor(Math.random()*254) + "," + Math.floor(Math.random()*254)  + "," + Math.floor(Math.random()*254) + ")";
}

titleTop.style.transition = "all 0.1s ease";

// Button two actions
const buttonTwo = document.querySelector("#btn2");
const overlayMessage = document.querySelector("#overlay-message");
const closeButton = document.querySelector("#close-button");

buttonTwo.addEventListener("click", e => {
    overlayMessage.classList.toggle('overlay-hidden');
    closeButton.classList.toggle('overlay-hidden');
})

// Close X button actions
closeButton.addEventListener("click", e => {
    closeButton.classList.toggle('overlay-hidden');
    overlayMessage.classList.toggle('overlay-hidden');
})

// Button three actions

const buttonThree = document.querySelector("#btn3");
const bodySepia = document.querySelector('#old-timey');
const footerBottom = document.querySelector('footer');

buttonThree.addEventListener("click", e => {
    buttonThree.classList.toggle('button-three');
    buttonThree.classList.toggle('button-three-alive');
    bodySepia.classList.toggle('old-timey');
    footerBottom.classList.toggle('old-timey');
});

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
const hiddenButton = document.querySelector("#h1");
const artCat = document.querySelector("#art-cat"); 

hiddenButton.addEventListener("click", e => {
    artCat.classList.add('art-animation');
    hiddenButton.classList.add('no-select');
    timeout = setTimeout(stopAnimation, 8000);
    timeout = setTimeout(titleClickBack, 9000);
});

function stopAnimation() {
    artCat.classList.remove('art-animation');
}

function titleClickBack() {
    hiddenButton.classList.remove('no-select');
}