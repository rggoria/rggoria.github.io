// Hero Section
var typed = new Typed('.typer', {
    strings: ['Developer.', 'Designer.', 'Gamer.'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

const observerHero = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-hero');
        } else {
            entry.target.classList.remove('show-hero');
        }
    });
});

const hiddenElementsHero = document.querySelectorAll('.hidden-hero',);
hiddenElementsHero.forEach((el) => observerHero.observe(el));

// About Section
const observerAbout = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-about');
        } else {
            entry.target.classList.remove('show-about');
        }
    });
});

const hiddenElementsAbout = document.querySelectorAll('.hidden-about',);
hiddenElementsAbout.forEach((el) => observerAbout.observe(el));

// Skill Section
let valueNumber=document.querySelectorAll(".exp-number");
let interval = 2000;
valueNumber.forEach((valueNumber) => {
    let startValue = 0;
    let endValue = parseInt(valueNumber.getAttribute("data-val"));
    let duration = Math.floor(interval/endValue);
    let counter = setInterval(() =>{
        startValue += 1;
        valueNumber.textContent=startValue;
        if(startValue==endValue){
            clearInterval(counter);
        }
    },duration)
});

const observerSkill = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-skill');
        } else {
            entry.target.classList.remove('show-skill');
        }
    });
});

const hiddenElementsSkill = document.querySelectorAll('.hidden-skill',);
hiddenElementsSkill.forEach((el) => observerSkill.observe(el));

// Services Section
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-service');
        } else {
            entry.target.classList.remove('show-service');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden-service',);
hiddenElements.forEach((el) => observer.observe(el));

// Contact Section
document.addEventListener('DOMContentLoaded', function() {
    var toastLiveExample = document.getElementById('liveToast')
    var toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
});