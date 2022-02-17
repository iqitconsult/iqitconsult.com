var css = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var aside = document.getElementById("gradient");

function setGradient() {
    aside.style.background = 
    "linear-gradient(to right, " + color1.value +"," + color2.value +")";
    
    css.textContent = aside.style.background + ";";
}

color1.addEventListener("input", setGradient);
    
color2.addEventListener("input", setGradient);