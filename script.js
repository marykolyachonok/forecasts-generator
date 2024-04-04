/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */


const forecast1 = "Сегодня будет хороший день";
const forecast2 = "Сегодня ты встретишь свою любовь";
const forecast3 = "Друзья помогут тебе наполниться хорошими эмоциями";
const forecast4 = "Подари себе поадрок, чтобы напомнить самой себе какая ты замечательная";
const forecast5 = "Скоро ты найдёшь своё предназначение";

const button = document.querySelector(".forecast-btn");
const header = document.querySelector(".current-forecast h1");
const percent = document.querySelector('.current-forecast p');


function generateRandomValue(min, max) {
    let number = Math.floor(Math.random() * 100) + 1;
    return +number;
}

button.addEventListener('click', generateRandomValue) {
    if (number <= 20) {
        header.append('forecast1')
    } else if (number <= 40) {
        header.append('forecast2')
    } else if (number <= 60) {
        header.append('forecast3')
    } else if (number <= 80) {
        header.append('forecast4')
    } else {
        header.append('forecast5')
    }

    percent.append('Вероятность: ${`number`} % ');
    sendInput.value = '';
}

button.addEventListener('click', generateRandomValue) {
    const itemsText = button.value;

    const newMessage = document.querySelector('.forecast-btn');
    newMessage.classList.add('element')
    newMessage.textContent = itemsText;
}