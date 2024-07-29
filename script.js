// Add your code to this file
let background = document.querySelector("body");
background.style.backgroundColor = "darkblue";

let pic = document.querySelector("img");
pic.style.borderStyle = "dotted";
pic.style.borderColor = "orange";

let bulbasaurbox = document.getElementById("bulbasaur_container");
bulbasaurbox.style.backgroundColor = "#347474";

let pokepics = document.getElementsByClassName("pokemon_images");
for(let pos=0; pos < pokepics.length; pos++) {
    pokepics[pos].style.border = "5px dotted orange"
}

let copyright = document.querySelector("footer");
copyright.style.fontFamily = "courier new"
// how do you change the fonts
