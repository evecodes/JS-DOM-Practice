// Button one actions
const buttonOne = document.querySelector("#btn1");

buttonOne.addEventListener("click", e => {
    buttonOne.classList.toggle('button-one');
    buttonOne.classList.toggle('button-one-alive');
});


// Button two actions



// Button three actions



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