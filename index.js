
function displayPoem(response) {
    console.log("poem generated");
    new Typewriter("#result", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: ""
    })
}
function generatePoem(event) {
    event.preventDefault();
    let instructionsInput = document.querySelector("#user-instructions")
    let apiKey = "2009ba20620tfaoecec68f2784fdd0a3";
    let prompt = `Generate a French poem about ${instructionsInput.value}`;
    let context = "You are a romantic Poem expert and love to write short poem. You are heavily impacted by Victor Hugo. If I was your lover, what would you write to me? Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br/>. Sign the poem with SheCodes API. Not include the title or any punctuation marks";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    axios.get(apiUrl).then(displayPoem);
    console.log("Generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);
    }

let poemFormElement = document.getElementById("poem-generator");
poemFormElement.addEventListener('submit', generatePoem);
let poemElement = document.querySelector("#result");
poemElement.classList.remove("hidden");
poemElement.innerHTML = `<div class="blink">Genering a French poem about ${instructionsInput.value}</div>`;