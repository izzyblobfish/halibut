

const images = document.querySelectorAll('.entry img');
const entries = document.querySelectorAll('.entry')
const lightbox = document.querySelector('.modal');
const mainImg = document.querySelector('.modalImg');
const arrLeft = document.querySelector('.prevBtn');
const arrRight = document.querySelector('.nextBtn');
const close = document.querySelector('.close');
const modalTxt = document.querySelector(".modalTxt");

let imgIndex = 0;


entries.forEach(img => {
    img.addEventListener('click', e => {

        mainImg.src = e.target.src;
        modalTxt.innerHTML = e.target.alt;
        imgIndex = [...entries].indexOf(img);
        mainImg.src = images[imgIndex].src;
        modalTxt.innerHTML = images[imgIndex].alt;
        lightbox.classList.add("appear");
        
    });
});

/*

images.forEach(img => {
    img.addEventListener('click', e => {

        mainImg.src = e.target.src;
        modalTxt.innerHTML = e.target.alt;
        imgIndex = [...entries].indexOf(img);
        lightbox.style.display ="flex";
        console.log("shitter");
       

        
            lightbox.style.opacity ="1";

       
    });
});

*/

close.addEventListener('click', () => {
    lightbox.classList.remove("appear");

})

arrLeft.addEventListener('click', () =>{
    imgIndex --;
    if(imgIndex < 0) {
        imgIndex = images.length -1;

    }
    mainImg.src = images[imgIndex].src;
    modalTxt.innerHTML = images[imgIndex].alt;
});

arrRight.addEventListener('click', () => {
    imgIndex ++;
    if(imgIndex > images.length -1) {
        imgIndex = 0;
    }
    mainImg.src = images[imgIndex].src;
    modalTxt.innerHTML = images[imgIndex].alt;
});

document.addEventListener('keydown', function(ev) {

    if(ev.keyCode === 39){
        imgIndex ++;
    if(imgIndex > images.length -1) {
        imgIndex = 0;
    }
    mainImg.src = images[imgIndex].src;
    modalTxt.innerHTML = images[imgIndex].alt;
      }
   
  
    else if(ev.keyCode === 37){
      
        imgIndex --;
    if(imgIndex < 0) {
        imgIndex = images.length -1;

    }
    mainImg.src = images[imgIndex].src;
    modalTxt.innerHTML = images[imgIndex].alt;
  
    }
    if (event.key === 'Escape') {
        lightbox.classList.remove("appear");
    }
   
  });
  