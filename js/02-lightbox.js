import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const cardGallery = createGallery(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardGallery);

console.log(createGallery(galleryItems));

function createGallery(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
  `;
    })
    .join('');
};

let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt',
captionDelay: 250,
});