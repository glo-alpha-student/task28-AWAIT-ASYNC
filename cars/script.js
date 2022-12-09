const select = document.querySelector('.class-list');
const box = document.querySelector('.box');
const listInfo = box.querySelector('.list-info');

const listCondition = (car, price) => {
    const newInfo = document.createElement('div');

    listInfo.textContent = car;

    newInfo.textContent = price;

    listInfo.append(newInfo);
};
const getInfo = async (object, i) => {
    const resList = await fetch(object);
    const array = await resList.json();
    const list = array.cars[i];

    listCondition(`Тачка ${list.brand} ${list.model}`, `Цена ${list.price}$`);
};

select.addEventListener('input', e => {
    const selectValue = select.options[select.selectedIndex];

    switch (selectValue.index) {
        case 1:
            getInfo('cars.json', 0);
            break;
        case 2:
            getInfo('cars.json', 1);
            break;
        default:
            listCondition('выбери тачку');
            break;
    }
});

listCondition('выбери тачку');
