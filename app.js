const mainCard = document.querySelector(".main")
console.log(mainCard);

let scrollerId;
let paused = true;
let speed = 1;
let interval = speed * 5;

function startScroll(){
    setInterval(function(){
        window.scrollBy("smooth",2);
    },interval)
}


console.log(startScroll());