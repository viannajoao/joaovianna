/* ----- FUNCAO NAVBAR NAVEGACAO  ----- */
function myMenuFunction(){
  let menuBtn = document.getElementById("myNavMenu");
  console.log(menuBtn);
  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADICIONANDO SOMBRA DURANTE A NAVEGACAO DO SCROLL----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
let typingEffect = new Typed(".typedText",{
  strings : ["Dev Front-End","Analista de Infra"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})
sr.reveal('.gallery',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

/* ----------------- CARROSSEL PROJECTS -------------------- */

const galleryContainer = document.querySelector('.gallery-container')
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item')

class Carousel{

constructor(container, items, controls){
  this.carouselContainer = container;
  this.carouselControls = controls;
  this.carouselArray = [...items];
}

updateGallery(){
  this.carouselArray.forEach(el => {
    el.classList.remove('gallery-item-1')
    el.classList.remove('gallery-item-2')
    el.classList.remove('gallery-item-3')
    el.classList.remove('gallery-item-4')
    el.classList.remove('gallery-item-5')
  })

  this.carouselArray.slice(0, 5).forEach( (el, i) => {
    el.classList.add(`gallery-item-${i+1}`)
  })

}

setCurrentState(direction){
  if(direction.className == 'gallery-controls-previous'){
    this.carouselArray.unshift(this.carouselArray.pop());
  }else{
    this.carouselArray.push(this.carouselArray.shift());
  }

  this.updateGallery();
}

setControls(){
  this.carouselControls.forEach(control =>{
    galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
    document.querySelector(`.gallery-controls-${control}`).innerHTML = control
  })
}

useControls(){
  const triggers = [...galleryControlsContainer.childNodes];
  triggers.forEach(control => {
    control.addEventListener('click', e => {
      e.preventDefault();
      this.setCurrentState(control);
    })
  })
}


}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls)

exampleCarousel.setControls();
exampleCarousel.useControls()

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}

window.addEventListener('scroll', scrollActive)