let sprinkles = [];
let testimonials = [];
let testimonialBtn = [];
let activeTestimonial = 0;

window.onload = function() {    
    sprinkles = document.getElementsByClassName('sprinkle');
    testimonials = document.getElementsByClassName('testimonial');
    testimonialBtn = document.getElementsByClassName('testimonial-btn');
    
    for (let i = 0; i < testimonialBtn.length; ++i){
        testimonialBtn[i].onclick = function() {toggleClassOnClick(testimonialBtn[i])};
    }
    isInViewport(sprinkles[0])
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    setInterval(changeSprinkle, 1500);    
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function toggleClassOnClick(e){
    console.log(e.innerHTML);
    if((parseInt(e.innerHTML) - 1) !== activeTestimonial) {
        console.log("toggle!");
        testimonials[0].classList.toggle("hidden");
        testimonials[1].classList.toggle("hidden");
        if(activeTestimonial > 0) {
            activeTestimonial = 0;
        } else {
            activeTestimonial = 1;
        }
    }
    console.log(activeTestimonial);
}

function changeSprinkle() {
    sprinkles[0].classList.toggle("hidden");
    sprinkles[1].classList.toggle("hidden");
}