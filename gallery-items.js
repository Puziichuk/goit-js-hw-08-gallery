const gallery = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];

  const galleryContainer = document.querySelector('.js-gallery');
  const galleryMarkup = createGalleryMarkup(gallery);

  galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
  // galleryContainer.addEventListener('click', onGalleryContainerClick);


function createGalleryMarkup(gallery) {
return gallery.map(({preview, original, description}) => {
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
  window.addEventListener('keydown',onEscapePress);
  // window.addEventListener('keydown',onLEFTKeyPress);
  // window.addEventListener('keydown',onRIGHTKeyPress);
  e.preventDefault();
  
  if(e.target.nodeName === 'IMG') {
    refs.lightbox.classList.add('is-open');
    refs.lightbox.querySelector('.lightbox__image').src = e.target.src;
    refs.lightbox.querySelector('.lightbox__image').alt = e.target.alt;
  }
};

console.log(onOpenModal);

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

// function onRIGHTKeyPress (e){
//   const RIGHT_KEY_CODE = 'ArrowRight';
//   if(e.code === RIGHT_KEY_CODE){
//     refs.lightboxOverlay.style.backgroundColor = "#AA0000";
//     // refs.lightboxImage.style.marginRight = right + 160 + "px";
//   }
//  };

//  function onLEFTKeyPress (e){
//   const LEFT_KEY_CODE = 'ArrowLeft';
//   if(e.code === LEFT_KEY_CODE){
//     refs.lightboxOverlay.style.backgroundColor = "#ccc";
//     // refs.lightboxImage.style.marginLeft = left + 60 + "px";
//   }
//  };

