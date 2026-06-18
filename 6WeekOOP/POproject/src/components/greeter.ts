import { formatDate } from "../utils/formatters";

export function sayHello(name: string): string {
    return `привen, ${name}, Сегодняшняя дата ${formatDate(new Date())}`;
}