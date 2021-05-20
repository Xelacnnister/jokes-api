const jokeApiUrl = "https://icanhazdadjoke.com/";
const weatherApiUrl = "https://www.el-tiempo.net/api/json/v2/provincias/08"

 

document.getElementById("jokeButton").addEventListener("click", getJoke);

async function getJoke(){
    await fetch(jokeApiUrl, { 
        method: "GET",
        headers: {'Accept': 'application/json'} })
    .then((resp) => resp.json())
    .then(data => document.getElementById("output").innerHTML = data.joke);  
}

async function weather(){
    await fetch(weatherApiUrl, {
        method: "GET"
    })
    .then((resp) => resp.json())
    // .then(data => console.log(data.today));
    .then(data => document.getElementById("weather").innerHTML = data.today.p)    
}

weather();

//.provincias[7]