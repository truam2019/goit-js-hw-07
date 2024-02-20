import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

// se toman las imagenes y se importan 

const gallery = document.querySelector('.gallery');

// se crea la funcion para crear la galeria y los elementos 

function createGallery(items) {
  return items
    .map((item) =>
    `<li class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>`)
    .join("");

// uso el JOIN para que todas las imagenes esten dentro de una misma matriz 
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
}

// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
// se crea la constante para añadir la galeria dentro del HTML usando el innerHTML 

const addGallery = createGallery(galleryItems);

gallery.innerHTML = addGallery;

gallery.addEventListener ('click', clickOnImage);

// 

// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣

// se define la funcion, de que cuando se haga click en ella 
// abra la imagen dentro de un modal 

function clickOnImage(imageAction) {

  action(imageAction);

  if (imageAction.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
      <img src="${imageAction.target.dataset.source}" width="800" height="600">
  `);
  instance.show();

  // se agrega un eventlistener; que cuando se pulse la tecla ESCAPE se cierre la imagen que esta previamente en pantalla completa 

  gallery.addEventListener("keydown", (imageAction) => {
    if (imageAction.code === "Escape") {
      instance.close();
    }
  })

}


function action(imageAction) {
  imageAction.preventDefault();
}

