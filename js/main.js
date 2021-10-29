'use strict';


var elements = document.querySelectorAll(".button");

function handleClick() {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', () => console.log(elements[i].textContent));
    }
}

handleClick();