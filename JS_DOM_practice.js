// const body = document.body;

// body.append("testest");

// console.log("Hello world");

const buttonOne = document.querySelector("#btn1");

buttonOne.addEventListener("click", e => {
    buttonOne.classList.toggle('button-one');
    buttonOne.classList.toggle('button-one-alive');
});