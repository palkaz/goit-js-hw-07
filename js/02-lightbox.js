import { galleryItems } from "./gallery-items.js";
// Change code below this line
// получаем доступ к div где будет храниться коллекция
const galleryConteiner = document.querySelector(".gallery");
// создаем переменную где будет храниться вся галерея
const galleryMarkup = createGalleryCardsMarkup(galleryItems);
// console.log(galleryMarkup);
// console.log(galleryConteiner);
// добавляем в разметку галерею
galleryConteiner.insertAdjacentHTML("afterbegin", galleryMarkup);
// объявляем функцию создания карточек галереи
function createGalleryCardsMarkup(galleryItems) {
  // возвращаем созданные значения
  return (
    galleryItems
      //   на ретерне вызываем мар распыляем массив
      .map(({ preview, original, description }) => {
        // на ретерне мэпа вставляем шаблон с значениями от распыления
        return `<a class="gallery__item" href="${preview}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
      })
      // соединяем шаблон функцией
      .join("")
  );
}
// console.log(galleryItems);
