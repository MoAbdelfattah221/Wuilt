// Burger Icon
let list = document.querySelector(".list");
let icon = document.querySelector(".menu");
icon.onclick = function(){
    list.classList.toggle("active")
};

// Slider

// Slider Variables
let sliderItems = Array.from(document.querySelectorAll(".box"))
let currentSlide = 2;
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

checker();

// Slider Functions
next.onclick = nextSlide;
prev.onclick = prevSlide;


function nextSlide(){
    if(next.classList.contains("disabled")){
        return false;
    }else{
        currentSlide++;
        checker();
    }
}
function prevSlide(){
    if(prev.classList.contains("disabled")){
        return "";
    }else{
        currentSlide--;
        checker();
    }
} 


function checker(){
    removeWorkingClass();
    sliderItems[currentSlide - 1].classList.add("working");
    if(currentSlide == 1){
        prev.classList.add("disabled");
    }else{
        prev.classList.remove("disabled");
    }
    if(currentSlide == 3){
        next.classList.add("disabled");
    }else{
        next.classList.remove("disabled");
    }
}

function removeWorkingClass(){
    sliderItems.forEach(function(e){
        e.classList.remove("working");
    })
}