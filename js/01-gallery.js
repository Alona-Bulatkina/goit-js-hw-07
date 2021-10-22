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
const instance = basicLightbox.create (`
<div class="modal">
<img src="${event.target.dataset.source}" class="js-modal-img" width="800" height="600">
  </div>
`, {
    onShow: (instance) => {
        window.addEventListener("keydown", onKeyboardClick);
        function onKeyboardClick(event) {
          if (event.code === 'Escape') { 
              instance.close();
              window.removeEventListener('keydown', onKeyboardClick);
            };
        };
    
          instance.element().querySelector('.js-modal-img').addEventListener("click", () => {
             instance.close();
         });
        },
    }).show();
    }