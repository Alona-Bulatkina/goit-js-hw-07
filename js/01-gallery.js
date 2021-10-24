import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardGallery = createGallery(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardGallery);

console.log(createGallery(galleryItems));

function createGallery(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>
  `;
    })
    .join('');
};

// modal window

galleryContainer.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${event.target.dataset.source}" class="js-modal-img" width="800" height="600">
    <a class="close-lightbox">Close</a>
    </div>
`, {
      onShow: instance => {
       window.addEventListener("keydown", onKeyboardClick);
        function onKeyboardClick(event) {
          if (event.key === 'Escape') { 
              instance.close();
              window.removeEventListener('keydown', onKeyboardClick);
            };
        };
     }
  })
instance.show();
}


    