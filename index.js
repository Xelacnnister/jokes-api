const apiUrl = "https://icanhazdadjoke.com/";

async function getJoke(){
    await fetch(apiUrl, { 
        method: "GET",
        headers: {'Accept': 'application/json'} })
    .then((resp) => resp.json())
    .then(data => console.log(data.joke))


}

getJoke();