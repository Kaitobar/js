console.log(document)
/*
console.log(document.getElementsByTagName("li"))
console.log(document.getElementsByClassName("card"))
console.log(document.getElementsByName("nombre"))
console.log(document.getElementById("menu"))
console.log(document.querySelector("#menu"))
console.log(document.querySelector("a"))
console.log(document.querySelectorAll("a"))
console.log(document.querySelectorAll(".card")[3])
console.log(document.querySelectorAll("#menu li"))
*/

//Data atribuites
/*
console.log(document.documentElement.lang)
console.log(document.documentElement.querySelector(".link-dom").href)
console.log(document.documentElement.querySelector(".link-dom").getAttribute("href"))

document.documentElement.lang = "es"
console.log(document.documentElement.lang)
document.documentElement.setAttribute("lang","es-COL")
console.log(document.documentElement.lang)

const $linkDOM = document.querySelector(".link-dom")

$linkDOM.setAttribute("target","_blank")
$linkDOM.setAttribute("rel","noopener")
$linkDOM.setAttribute("href","https://youtube.com/jonmircha")
console.log($linkDOM.hasAttribute("rel"))
$linkDOM.removeAttribute("rel")
console.log($linkDOM.hasAttribute("rel"))
*/

/*
const $linkDOM = document.querySelector(".link-dom")

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("Style"))

//Variables CSS - Custom Properties CSS

const $html = document.documentElement, 
    $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color","#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color", varDarkColor);
*/
/*
const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);
console.log($card.classList)
*/


const $figure = document.createElement("figure"),
    $img = document.createElement("img");
    $figcaption = document.createElement("figcaption");
    $figcaptionText = document.createElement("Animals");
    $cards = document.querySelector(".cards");

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card")

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);
