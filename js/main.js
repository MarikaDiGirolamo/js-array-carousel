let containerElement = document.getElementById("container");
let slideShowElement = document.getElementById("slideShow");
let slide = document.getElementsByClassName("slide");
let slideArray = ["../img/01.webp", "../img/02.webp", "../img/03.webp", "../img/04.webp", "../img/05.webp"]
let currentSlide = 0;

for (let i = 0; i < slideArray.length; i++){
    let x = document.createElement("img");
    x.src = `../img/${slideArray}`;
    x.className = "slide hidden";
    slideShow.append(x);
}


// btnNext.addEventListener("click", function(){

//     console.log("Current Slide: ", currentSlide);

//     if(currentSlide < lastSlide) {
//         for (let i = 0; i < slide.length; i++) {
//             const slide = slide[c];

//             if(i == currentSlide+1 ) {
//                 slide.classList.remove("hidden");
//             } else {
//                 slide.classList.add("hidden");
//             }
//         }

//         currentSlide++;
//     } else {
//         console.log("non c'è una slide successiva");
//     }




