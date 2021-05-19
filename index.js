const apiUrl = "https://icanhazdadjoke.com/";


document.getElementById("jokeButton").addEventListener("click", getJoke);

async function getJoke(){
    await fetch(apiUrl, { 
        method: "GET",
        headers: {'Accept': 'application/json'} })
    .then((resp) => resp.json())
    .then(data => console.log(data.joke))
}
