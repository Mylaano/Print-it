const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Ajout des événements pour les flèches de gauche et droite

const 
	arrowLeft = document.querySelector(".arrow_left"),
	arrowRight = document.querySelector(".arrow_right");

let dotSelected = 0;

function slideImage(dotId) {
	const bannerImg = document.querySelector(".banner-img");
	bannerImg.src = "./assets/images/slideshow/" + slides[dotId]['image'];

	const bannerId = document.getElementById("banner");
	const text = bannerId.getElementsByTagName("p");
	text[0].innerHTML = slides[dotId]['tagLine'];
}

arrowLeft.addEventListener('click', () => {
	const test = document.querySelectorAll(".dot");

	test[dotSelected].classList.remove("dot_selected");
	dotSelected--;

	if(dotSelected < 0) {
		dotSelected = 3;
	}

	test[dotSelected].classList.add("dot_selected");

	slideImage(dotSelected);
})

arrowRight.addEventListener('click', () => {
	const test = document.querySelectorAll(".dot");

	test[dotSelected].classList.remove("dot_selected");
	dotSelected++;

	if(dotSelected > 3) {
		dotSelected = 0;
	}

	test[dotSelected].classList.add("dot_selected");

	slideImage(dotSelected);
})

// Ajouts des bullets points

const dotContenair = document.querySelector(".dots");

for(let i = 0; i < slides.length; i++) {
	let divDot = dotContenair.appendChild(document.createElement('div'));
	divDot.classList.add("dot");
}

const firstDot = document.querySelector(".dot");
firstDot.classList.add("dot_selected");