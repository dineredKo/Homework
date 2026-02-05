/*Часть A (Дженерики): Создайте универсальную функцию toArray<T>(...args: T[]): T[], 
которая принимает произвольное число аргументов одного типа и возвращает массив из них.*/
function toArray<T>(...args: T[]): T[] {
    return args;
}
const numbers = toArray(1,2,3,4,5,6,7,8,9,10,12)
console.log(numbers)

