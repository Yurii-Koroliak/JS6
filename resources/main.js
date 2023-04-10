// Створи масив «Список покупок». Кожен елемент масиву є об'єктом,
// який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару,
// сума. Написати кілька функцій для роботи з таким масивом:
const productName = ['bread', 'milk', 'meat', 'fish']
const bread = {
    productName: productName[0],
    priceOne: `10`,
    quantity: `2`,
    allPrice: `20`,
    stateOfPurchase: `bought`
};
const milk = {
    productName: productName[1],
    priceOne: `12`,
    quantity: `1`,
    allPrice: `12`,
    stateOfPurchase: `not Bought`
};
const meat = {
    productName: productName[2],
    priceOne: `20`,
    quantity: `5` ,
    allPrice: `100`,
    stateOfPurchase: `bought`
};
const fish = {
    productName: productName[3],
    priceOne: `24`,
    quantity: `1`,
    allPrice: `24`,
    stateOfPurchase: `bought`
};
const shoppindList = [bread, milk, meat, fish] 


// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
const notBought = shoppindList.find(a => a.stateOfPurchase === `not Bought`);
const indexOfNotBought = shoppindList.indexOf(notBought);
const deletNotBought = shoppindList.splice(indexOfNotBought, 1);
shoppindList.unshift(deletNotBought);
console.log(shoppindList);


// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
const productBuy = prompt(`Do you want buy ${notBought}?`);
if (productBuy == 'yes') {
    milk.stateOfPurchase = 'bought';
};
console.log(shoppindList);
 