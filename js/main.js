'use strict';


let elements = document.querySelectorAll(".button");

const handleClick = () => {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', () => console.log(elements[i].textContent));
    }
}