// Создайте массив чисел и используйте метод map, чтобы удвоить каждый элемент.
const numbers = [-1,2,-3,4,5,6,7,8,-9,0];
console.log(numbers.map(e => e * 2));

// Создайте массив строк и используйте метод map, чтобы преобразовать все строки в верхний регистр.
const words = ['hello','world','!'];
console.log(words.map(e => e.toUpperCase()));

// Создайте массив чисел и используйте метод forEach, чтобы вычислить сумму всех элементов.
let sum = 0;
numbers.forEach(e => { sum += e});
console.log(sum);

// Создайте массив чисел и используйте метод filter, чтобы удалить все отрицательные числа.
console.log(numbers.filter(e => e >= 0));
