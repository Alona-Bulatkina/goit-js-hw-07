import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardGallery = createGallery(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardGallery);

console.log(createGallery(galleryItems));

function createGallery(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<a class="gallery__item" 
        href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}" />
      </a>
  `;
    })
    .join('');
};

var lightbox = $('.gallery a').simpleLightbox({options});
// // modal window

// galleryContainer.addEventListener("click", onGalleryClick);

// function onGalleryClick(event) {event.preventDefault();
// const instance = basicLightbox.create (`
// <div class="modal">
// <img src="${event.target.dataset.source}" class="js-modal-img" width="800" height="600">
//   </div>
// `, {
//     onShow: (instance) => {
//         window.addEventListener("keydown", onKeyboardClick);
//         function onKeyboardClick(event) {
//           if (event.code === 'Escape') { 
//               instance.close();
//               window.removeEventListener('keydown', onKeyboardClick);
//             };
//         };
    
//           instance.element().querySelector('.js-modal-img').addEventListener("click", () => {
//              instance.close();
//          });
//         },
//     }).show();
//     }