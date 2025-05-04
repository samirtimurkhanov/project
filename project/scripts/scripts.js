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

 

    // Объявляем переменную-массив photoItem и сохраняем в нее все элементы на странице с классом photo__item 
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
    
// Динамическое формирование карточек.

//Объявляем переменную cardsPrice и сохраняем в нее элемент с классом price
const cardsTour = document.querySelector('.popular-tours');
// Если такой элемент существует
if (cardsTour) {
//Объявляем переменную tours и сохраняем в нее элемент с классом .tours, чтобы мы могли добавить новые элементы
            const tours = cardsTour.querySelector('.tours');
    
//Создаем объект cardsToursData, которая содержит данные для карточек.
const cardsTourData = {
// каждая ссылка содержит name (название тура), desc (описание)
 tour1: {
    className: 'tours__card-a',
    name: 'ДУША ГРУЗИИ: ЛУЧШЕЕ ЗА 6 ДНЕЙ',
    desc: 'Идеальное первое знакомство с Грузией. Тбилиси, Казбеги, Кахетия, древние монастыри, хинкали в горах и вино в Алазанской долине. Путешествие сочетает культуру, природу и гастрономию'
 },
 tour2: {
    className: 'tours__card-b',
    name: 'ВИННЫЕ ДОРОГИ КАХЕТИИ',
    desc: 'Посетим уютные семейные винодельни, монастыри Алаверди и Бодбе, пройдемся по улочкам Сигнахи, полюбуемся Алазанской долиной и попробуем настоящий шашлык на виноградных ветках.'
 },
 tour3: {
    className: 'tours__card-c',
    name: 'СВАНЕТИЯ: В КРАЮ БАШЕН И ЛЕДНИКОВ',
    desc: 'Экспедиция в самую загадочную часть Грузии – Сванетию. Узнаем легенды средневековых башен, попробуем настоящий кубдари, увидим ледник Шхара и покорим горные тропы.'
 },
 tour4: {
    className: 'tours__card-d',
    name: 'ТАИНСТВЕННАЯ ИМПЕРЕТИЯ',
    desc: 'Путешествие в регион древнего Колхидского царства. Каньоны Окаце и Мартвили, сталактитовые пещеры Прометея, монастырь Гелати и вкуснейшая кухня Имеретии.'
 },
 tour5: {
    className: 'tours__card-e',
    name: 'ГАСТРОТУР: ГРУЗИЯ НА ВКУС',
    desc: 'Путешествие для гурманов по лучшим ресторанам, винодельням и домашним кухням Грузии. Хачапури по-аджарски, мегрельские сыры, тушетская баранина и легендарный кахетинский шашлык.'
 },
 tour6: {
    className: 'tours__card-f',
    name: 'АДЖАРИЯ: МОРЕ, ГОРЫ И АДЖАПСАНДАЛИ',
    desc: 'Микс морского отдыха и горных приключений. Батумский променад, Махунцети с его водопадами и арочным мостом, Зеленый мыс, тропический ботанический сад и фермерские сыроварни.'
 }
}
//Создаем функцию createCard, которая будет добавлять карточку. Внутри функции 3 переменные: name (название тура), desc (описание),className (класс).
const createCard = (name, desc, className) => {
    // Создаем переменную  card, которая будет содержать HTML-код карточки и вставляем туда 3 переменные
                const card = `
                <li class="${className}">
                    <h3 class="tours__name">${name}</h3>
                    <p class="tours__desc">${desc}</p>
                </li>
            `;
    //  Возвращаем значение переменной card
    return card;
}
// Создаем цикл for и проходим по всем элементам объекта cardsTourData.
for (const cardKey in cardsTourData) {
    //Получаем данные одной карточки из объекта cardsTourData 
                const card = cardsTourData[cardKey];
    //создаем переменную cardElement и вызываем функцию createLink, куда передаем элементы карточки.
                const cardElement = createCard(card.name, card.desc, card.className);
    // с помощью метода insertAdjacentHTML добавляем созданный HTML-код в конец списка priceList.
                tours.insertAdjacentHTML('beforeend', cardElement);
            }
    }
    
// Preloader страницы
const preloader = document.querySelector('.preloader');
    const content = document.querySelector('.content');
    if (preloader && content) {
        setTimeout(() => {
            // Скрываем прелоадер
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';

            // Показываем контент
            content.style.display = 'block';

            // Удаляем элемент из DOM
            preloader.remove();
        }, 3000); // Задержка 3 секунды
    }

    //Создаем динамические карточки, загружая данные с сервера.
    const cardsCon = document.querySelector(".popular-tours");
    if (cardsCon) {
    const cardList = cardsCon.querySelector(".tours__cards");
    const apiUrl = "data.json";
    // Функция для создания карточки
    const createCard = (
        bgImageUrl,
        title,
        description,
    ) => {
        const card = `
            <li class="tours__card" style="background-image: url('${bgImageUrl}'); width: 347px; height: 410px; background-size: cover; background-position: center;">
                <h3 class="tours__name">${title}</h3>
                <p class="tours__desc">${description}</p>
            </li>
        `;
        return card;
    };
    // Загрузка данных с сервера
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            console.log(typeof data);

            data.forEach((item) => {
                const cardElement = createCard(
                    item.bgImage,      
                    item.title,
                    item.description,
                );
                cardList.insertAdjacentHTML("beforeend", cardElement);
            });
        })
        .catch((error) => {
            console.error("Ошибка при загрузке данных:", error);
        });
}
