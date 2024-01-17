

const images = document.querySelectorAll('.entry img');
const entries = document.querySelectorAll('.entry')
const lightbox = document.querySelector('.modal');
const mainImg = document.querySelector('.modalImg');
const arrLeft = document.querySelector('.prevBtn');
const arrRight = document.querySelector('.nextBtn');
const close = document.querySelector('.close');
const modalTxt = document.querySelector(".modalTxt");
const currentEntryIndex = document.querySelector(".currentEntryIndex");
const totalEntryIndex = document.querySelector(".totalEntryIndex");



let imgIndex = 0;


entries.forEach(img => {
    img.addEventListener('click', e => {

        mainImg.src = e.target.src;
        modalTxt.innerHTML = e.target.alt;
        imgIndex = [...entries].indexOf(img);
        mainImg.src = images[imgIndex].src;
        modalTxt.innerHTML = images[imgIndex].alt;

        currentEntry =  imgIndex + 1 ;
        currentEntryIndex.innerHTML = currentEntry;
        totalEntryIndex.innerHTML = images.length;

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
    currentEntry --;
    if(imgIndex < 0) {
        imgIndex = images.length -1;

    }
    if(currentEntry < 1) {
        currentEntry = images.length;

    }
    mainImg.src = images[imgIndex].src;
    modalTxt.innerHTML = images[imgIndex].alt;
    currentEntryIndex.innerHTML = currentEntry;
});

arrRight.addEventListener('click', () => {
    imgIndex ++;
    currentEntry ++;
    if(imgIndex > images.length -1) {
        imgIndex = 0;
    }
    if(currentEntry > images.length ) {
        currentEntry = 1;
    }
    mainImg.src = images[imgIndex].src;
    modalTxt.innerHTML = images[imgIndex].alt;
    currentEntryIndex.innerHTML = currentEntry;
});

document.addEventListener('keydown', function(ev) {

    if(ev.keyCode === 39){
        imgIndex ++;
        currentEntry ++;
    if(imgIndex > images.length -1) {
        imgIndex = 0;
    }
    if(currentEntry > images.length ) {
        currentEntry = 1;
    }
    mainImg.src = images[imgIndex].src;
    modalTxt.innerHTML = images[imgIndex].alt;
    currentEntryIndex.innerHTML = currentEntry;
      }
   
  
    else if(ev.keyCode === 37){
      
        imgIndex --;
        currentEntry --;
    if(imgIndex < 0) {
        imgIndex = images.length -1;

    }
    if(currentEntry < 1) {
        currentEntry = images.length;

    }
    mainImg.src = images[imgIndex].src;
    modalTxt.innerHTML = images[imgIndex].alt;
    currentEntryIndex.innerHTML = currentEntry;
  
    }
    if (event.key === 'Escape') {
        lightbox.classList.remove("appear");
    }
   
  });
  