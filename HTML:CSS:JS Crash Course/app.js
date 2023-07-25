const pics = [
    "imgs/bulldog1.jpg",
    "imgs/bulldog2.jpg",
    "imgs/bulldog3.jpg",
    "imgs/bulldog4.jpg",
    "imgs/bulldog5.jpg",
    "imgs/bulldog6.jpg",
    "imgs/bulldog7.jpg",
    "imgs/bulldog8.jpg",
    "imgs/bulldog9.jpg",
    "imgs/bulldog10.jpg"
]

const button = document.querySelector("button");
let image = document.querySelector("img")
let counter = 1;

button.addEventListener("click", function(){
    if (counter === 9){
        counter = 0
    }
    image.src = pics[counter]
    counter++
})