
const sliderText = document.querySelector(".slider-content h1");
const text = "Samir Es-safi";  
let index = 0;  


function typeWriter() {
    if (index < text.length) {
        sliderText.innerHTML += text.charAt(index);  
        index++;  
        setTimeout(typeWriter, 200);  
    }
}

window.onload = () => {
    typeWriter();
};


const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const slider = document.querySelector('.skill-slider');
let slideIndex = 0;

prevButton.addEventListener('click', () => {
    if (slideIndex > 0) {
        slideIndex--;
        slider.style.transform = `translateX(-${slideIndex * 25}%)`;
    }
});

nextButton.addEventListener('click', () => {
    if (slideIndex < 1) { 
        slideIndex++;
        slider.style.transform = `translateX(-${slideIndex * 25}%)`;
    }
});
