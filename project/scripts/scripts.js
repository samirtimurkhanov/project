'use strict'
document.addEventListener("DOMContentLoaded", () => {


    // 1.  Изменение состояния элемента при наведении, появление текста в элементе при наведении 

    // 1. Начало
    // 2. Получаем все элементы изображений с описанием.
    // 3. Для каждого изображения (проверяем есть ли такие изображения):
    //   3.1. Добавляем обработчик наведения курсора на изображение:
    //      3.1.1. Да:
    //         3.1.1.1. затемняем фон изображения при наведении.
    //         3.1.1.2. показываем текст при наведении. 
    //         3.1.2. Нет: продолжаем. 
    //   3.2. Добавляем обработчик курсор уходит с изображения:
    //       3.3.1. Да:
    //          3.3.1.1. Скрываем элемент с эписанием.
    //       3.3.2. Нет: продолжаем.
    //  4. Конец. 
    // БЛОК-СХЕМА: images/Block-schema.png.png

 

    // Объявляем переменную-массив intensiveImg и сохраняем в нее все элементы на странице с классом intensive__img  
      const photoItem = document.querySelectorAll('.photo__item');
      photoItem.forEach((item, index) => {
        const photoText = document.querySelectorAll('.photo__name');
        item.addEventListener('mouseenter', () => {
         photoText[index].removeAttribute('hidden');
    });
        item.addEventListener('mouseleave', () => {
            photoText[index].setAttribute('hidden', true);
        });
    });
});
// 2. Кнопка скролла в начало сайта
// Получаем кнопку
const scrollUpButton = document.querySelector(".scroll-up");

// Показываем/скрываем кнопку при прокрутке
if (scrollUpButton) {
    const windowHeight = document.documentElement.clientHeight; // Определяем высоту видимой части окна браузера

    // Показать кнопку при прокрутке вниз на высоту экрана
    document.addEventListener('scroll', () => {
        let scrollPageY = this.scrollY;

        if (scrollPageY >= windowHeight) {
            scrollUpButton.classList.add('scroll-up--show');
        } else {
            scrollUpButton.classList.remove('scroll-up--show');
        }
    });

    // Плавная прокрутка наверх при нажатии на кнопку
    scrollUpButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* Динамический вывод карточек тегов (Используем массив с данными)*/

//Объявляем переменную photoContainer и сохраняем в нее элементы photo
const photoContainer = document.querySelector(".photo");

// проверяем существует ли элемент photoContainer, если он существует то переходим далее 
// и создаем массив dataTitlePhoto, который содержит строки с названиями фотоотчетов.(здесь уже пишем те значения, которые надо подставить вместо слова Фото 1, Фото 2 и т.д)
if (photoContainer) {
    const dataTitlePhoto = [
        "СВАНЕТИЯ",
        "КАЗБЕГИ",
        "КАХЕТИЯ",
        "БАТУМИ",
        "ТБИЛИСИ",
    ];
//Объявляем переменную titlePhoto и сохраняем в нее все элементы на странице с классом photo__name (где должны стоять названия фотоотчетов)
const titlePhoto = photoContainer.querySelectorAll(".photo__name");
// Проходим по каждому элементу массива titlePhoto с помощью цикла forEach. Внутри функции 2 переменные: item – текущий заголовок, а index — его индекс в массиве.
titlePhoto.forEach((item, index) => {

    //здесь обновляем значение текущего заголовка (textContent) на новое значение из массива dataTitlePhoto, используя индекс текущего заголовка.
          item.textContent = dataTitlePhoto[index];
               });
        }
    