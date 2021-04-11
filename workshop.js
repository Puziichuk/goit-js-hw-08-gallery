import gallery from "./gallery-items.js";

  const galleryContainer = document.querySelector('.js-gallery');
  const galleryMarkup = createGalleryMarkup(gallery);


  galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
  // galleryContainer.addEventListener('click', onGalleryContainerClick);


function createGalleryMarkup(gallery) {
return gallery.map(({original, description}) => {
return `
  <li class="gallery__item">
      <a class="gallery__link"
        href="${original}">
        <img
          class="gallery__image"
          src="${original}"
          data-source="${original}"
          alt="${description}"/></a>
  </li>
    `;
})
.join('');
}

// function onGalleryContainerClick(evt){

//   if(!evt.target.classList.contains('gallery__image')){
//     return;
//   }

// const lightBox = evt.target;
// const parentGalleryCard = lightBox.closest('.gallery-item');

// }



const refs = {
  openModalBtn: document.querySelector('ul.gallery'),
  closeModalBtn: document.querySelector('[data-action="close-lightbox"]'),
  lightbox: document.querySelector('.lightbox'),
  lightboxOverlay: document.querySelector('.lightbox__overlay'),
};


refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.lightboxOverlay.addEventListener('click', onCloseModal)

function onOpenModal (e){
  e.preventDefault();
  window.addEventListener('keydown',onEscapePress);
  window.addEventListener('keydown',onKeyPress);
  // window.addEventListener('keydown',onLEFTKeyPress);
  // window.addEventListener('keydown',onRIGHTKeyPress);
  
  if(e.target.nodeName === 'IMG') {
    refs.lightbox.classList.add('is-open');
    refs.lightbox.querySelector('.lightbox__image').src = e.target.src;
    refs.lightbox.querySelector('.lightbox__image').alt = e.target.alt;
  }
};


function onCloseModal (e){
  window.removeEventListener('keydown',onEscapePress);
  if(e.target.nodeName === "DIV" || e.target.nodeName === "BUTTON") {
  refs.lightbox.classList.remove('is-open');
  refs.lightboxOverlay.classList.remove('is-open');
}
};


function onEscapePress (e){
 const ESC_KEY_CODE = 'Escape';
 if(e.code === ESC_KEY_CODE){
  refs.lightbox.classList.remove('is-open');
 }
};

// let currentIndex = 1;
// function onRIGHTKeyPress (e){;
//   const RIGHT_KEY_CODE = 'ArrowRight';
//   if(e.code === RIGHT_KEY_CODE){
//     currentIndex += 1;
//     // refs.lightboxOverlay.style.backgroundColor = "#AA0000";
//     setModalImage(currentIndex);
//   }
//  };

//  function onLEFTKeyPress (e){
//   const LEFT_KEY_CODE = 'ArrowLeft';
//   if(e.code === LEFT_KEY_CODE){
//     currentIndex -= 1;
//     // refs.lightboxOverlay.style.backgroundColor = "#ccc";
//     setModalImage(currentIndex);
//   }
//  };

// function setModalImage(index){
//   console.log(gallery[index]);
 
// }


let currentIndex = 1;
 function onKeyPress (e){
  e.preventDefault();
  if(e.code === 'ArrowLeft'){
    currentIndex -= 1;
  } else if (e.code === 'ArrowRight'){
      currentIndex += 1;
  } if (currentIndex > gallery.length){
    currentIndex = 0;
}
    
  
  setModalImage(currentIndex);

 };

function setModalImage(index){
  console.log(gallery[index].original);
  refs.lightbox.querySelector('.lightbox__image').src = gallery[index].original;
 
}


// const refs = {
//   galleryList: document.querySelector(".js-gallery"),
//   modal: document.querySelector(".js-lightbox"),
//   modalImg: document.querySelector(".lightbox__image"),
// };
// let activeIndex = null;
// const markup = galleryItems.map(({ preview, original, description }) => {
//   return `<li class="gallery__item">
//     <a class="gallery__link" href=${original}>
//      <img class="gallery__image" src=${preview} data-source=${original} alt=${description}>
//     </a>
//   </li>`;
// });
// refs.galleryList.insertAdjacentHTML("beforeend", markup.join(""));
// refs.galleryList.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (e.target.localName !== "img") {
//     return;
//   }
//   markup.forEach((el, ind) => {
//     if (el.includes(e.target.src)) {
//       activeIndex = ind;
//     }
//   });
//   refs.modal.classList.add("is-open");
//   // refs.modalImg.setAttribute('src', e.target.datase.source)
//   refs.modalImg.src = e.target.dataset.source;
// });
// window.addEventListener("keyup", (e) => {
//   if (e.key !== "Escape") {
//     return;
//   }
//   refs.modalImg.src = "";
//   refs.modal.classList.remove("is-open");
// });
// refs.modal.addEventListener("click", (e) => {
//   if (e.target.localName !== "img") {
//     refs.modalImg.src = "";
//     refs.modal.classList.remove("is-open");
//   }
// });
// window.addEventListener("keyup", (e) => {
//   if (e.key === "ArrowRight") {
//     activeIndex += 1;
//     refs.modalImg.src = galleryItems[activeIndex].original;
//     return;
//   }
//   if (e.key === "ArrowLeft" && activeIndex > 0) {
//     activeIndex -= 1;
//     refs.modalImg.src = galleryItems[activeIndex].original;
//     return;
//   }
//   if (e.key === "ArrowLeft" && activeIndex === 0) {
//     activeIndex = galleryItems.length - 1;
//     refs.modalImg.src = galleryItems[activeIndex].original;
//   }
// });