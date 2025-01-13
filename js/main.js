const title = "Planeten";
const subTitle = "Alles over planeten";
const planets = ["Mercurius", "Venus", "Aarde", "Mars", "Jupiter", "Saturnus", "Uranus", "Neptunus"];
const routes = ["Home", "Universum", "Planeten"];


let kleurBtn = document.querySelector('.btn-make-light');
let planeetBtn = document.querySelector('.btn-add-planet');
let darkBtn = document.querySelector('.btn-make-dark');


darkBtn.addEventListener('click', function(){
    document.body.style.backgroundColor ='black';
    document.body.style.color = 'white';
});


//maakt de witte thema knop
kleurBtn.addEventListener('click', function(){
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
});


//de hinderlijke planeey
//planeetBtn.addEventListener('click', addPlanet);

function addPlanet(){
    const planet = prompt("Welke planeet wil je toevoegen?");
    planets.push(planet);
    const planetsView = document.querySelector(".plannitz");
    planetsView.innerHTML += "<li>" + planet + "</li>";
}