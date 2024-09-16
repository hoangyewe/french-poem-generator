import Typewriter from 'typewriter-effect/dist/core';
let poemFormElement = document.getElementById("poem-generator");
poemFormElement.addEventListener('submit', generatePoem);
function generatePoem(event) {
    event.preventDefault();
    new Typewriter("#poem", {
        strings: "La tombe dit à la rose",
        autoStart: true,
        delay: 1,
        cursor: "",
    })
}
