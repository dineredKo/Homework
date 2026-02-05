//Часть B (Перегрузка функций): Объявите перегруженную функцию parseInput(input: string): number; 
// и parseInput(input: string, radix: number): number;. Реализация должна использовать parseInt. 
// Покажите её вызов в двух вариантах.
function parseInput(input: string): number;
function parseInput(input: string, radix: number): number;

function parseInput(input: string, radix?: number): number {
    if (radix !== undefined) {
        return parseInt(input, radix);
    }
    return parseInt(input);
}

const number = parseInput("1010", 2) // С двумя параметрами = 10 т.к 2-ная система 
console.log(number)

const number1 = parseInput("123") // С одним параметром. Вроде так) = 123
console.log(number1)