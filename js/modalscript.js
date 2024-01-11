//I dont claim to know how to write javascript

const galleryItems = document.querySelectorAll('.entry');
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modalImg');
const close = document.querySelector('.close');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const modalText = document.querySelector('.modalTxt');

let currentIndex = 0;


function openModal(index) {
    modal.classList.add('appear');
    showImage(index);
}

function showImage(index) {
    index = (index + galleryItems.length) % galleryItems.length;
    const imgSrc = galleryItems[index].querySelector('img').src;
    const altText = galleryItems[index].querySelector('img').alt;
    modalImage.src = imgSrc;
    modalText.innerHTML = altText;
    currentIndex = index;
    
}

document.addEventListener('keydown', function(ev) {

  if(ev.keyCode === 39){
    showImage(currentIndex + 1);
    console.log(currentIndex);

    }
 

  else if(ev.keyCode === 37){
    
    showImage(currentIndex - 1);
    console.log(currentIndex);

  }
  if (event.key === 'Escape') {
    modal.classList.remove("appear");
  }
 
});



function clickableDiv() {
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openModal(index));
    });
}


close.addEventListener("click", () => {
  modal.classList.remove("appear");
});
prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
nextBtn.addEventListener('click', () => showImage(currentIndex + 1));

clickableDiv();





/*


const images = document.querySelectorAll(".entry img"); 

const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const modalTxt = document.querySelector(".modalTxt");
const close = document.querySelector(".close");
const entryBox = document.querySelectorAll(".entry");

const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

let currentIndex = 0;



entryBox.forEach((index) => {

 
          
  document.querySelectorAll(".entry").forEach(el => el.addEventListener("click", event => { const img = el.querySelector("img");
          
          
        
          openModal();
          getIndex(index);
          console.log(index);

          

          
          
        }
      )
    );
  image.addEventListener("click", () => {
    close.addEventListener("click", () => {
      modal.classList.remove("appear");
    });
  });

  });


function openModal(index){

  modal.classList.add("appear");
  getIndex(index);


}






  document.addEventListener('keydown', function(ev) {

    if(ev.keyCode === 39){
      getIndex(currentIndex - 1);
      console.log(currentIndex);

      }
   
  
    else if(ev.keyCode === 37){
      
      getIndex(currentIndex + 1);
      console.log(currentIndex);
 
    }

   
});






  
images.forEach((image) => {
  image.addEventListener("click", () => {
    modalImg.src = image.src;
   
    modalTxt.innerHTML = image.alt;
    modal.classList.add("appear");

    

    close.addEventListener("click", () => {
      modal.classList.remove("appear");
    });

//    modal.addEventListener("click", () => {
 //       modal.classList.remove("appear");
  //    });
  

  });
});






function closeModal() {
    modal.classList.remove("appear");
  }



  
//modal.addEventListener('click', function(event) {
//    const isOutside = !event.target.closest('.modalImg img');
//    if (isOutside) {
//        closeModal();
//      }
//  })


window.addEventListener('keydown', event => {
  console.log(event);
  if (event.key === 'Escape') {
    closeModal();
  }
});


*/