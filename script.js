'use strict';

{
   const productName1 = 'яблоки';
   const quantity = 10;
   const category = 'продукты';
   const priceUnit = 290;

   const amount1 = quantity * priceUnit;
   console.log(`На складе ${quantity} единиц(ы) товара "${productName1}" на сумму ${amount1} рублей.`);
}
{
   const productName2 = 'мандарины';
   const quantity = 24;
   const category = 'продукты';
   const priceUnit = 350;

   const amount2 = quantity * priceUnit;
   console.log(`На складе ${quantity} единиц(ы) товара "${productName2}" на сумму ${amount2} рублей.`);
}
{
   const productName3 = (prompt("Введите наименование товара буквами русского алфавита", "")).toLowerCase();
   const quantity = Number(prompt("Введите количество товара в кг цифрами", ""));
   console.log('Количество товара', quantity, typeof quantity);
   const category = (prompt("Введите категорию товара буквами русского алфавита", "")).toLowerCase();
   const priceUnit = Number(prompt("Введите цену единицы товара в рублях цифрами", ""));
   console.log('Цена единицы товара', priceUnit, typeof priceUnit);

   const amount3 = quantity * priceUnit;
   console.log(`На складе ${quantity} единиц(ы) товара "${productName3}" на сумму ${amount3} рублей.`);
}
