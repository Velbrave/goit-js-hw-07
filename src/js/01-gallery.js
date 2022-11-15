import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function createGalleryMarkup(items) {
  return items
    .map(
      item => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
    )
    .join('');
}

const addGalleryMarkup = createGalleryMarkup(galleryItems);
galleryEl.innerHTML = addGalleryMarkup;
galleryEl.addEventListener('click', onImagesClick);

function onImagesClick(event) {
  blockStandartActions(event);
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
  <img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  galleryEl.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
}

function blockStandartActions(event) {
  event.preventDefault();
}


