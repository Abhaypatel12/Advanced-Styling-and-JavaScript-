const setup = document.getElementById("setup");
const punchline = document.getElementById("punchline");
const button = document.getElementById("get-joke");

async function getJoke() {
  setup.textContent = "Loading joke...";
  punchline.textContent = "";

  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const joke = await response.json();

    setup.textContent = joke.setup;
    punchline.textContent = joke.punchline;
  } catch (error) {
    setup.textContent = "Oops! Couldn't fetch a joke.";
    console.error("Error fetching joke:", error);
  }
}

button.addEventListener("click", getJoke);
