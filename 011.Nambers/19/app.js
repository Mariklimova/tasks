// 19. Даны три числа a, b, c. Напишите программу, которая находит корни квадратного
// уравнения ax2 + bx + c = 0
// Если уравнение имеет два корня, то следует вывести их в порядке возрастания.


let a = +prompt('введите число a');
let b = +prompt('введите число b');
let c = +prompt('введите число c');
let D = b ** 2 - 4 * a * c;
let x1;
let x2;
let x = [x1 = (-b + Math.sqrt(D)) / (2 * a), x2 = (-b - Math.sqrt(D)) / (2 * a)];


if (D == 0) {
    x1 = x2 = -b / (2 * a);
    console.log(x1 = x2);
} else if (D > 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    console.log(x.sort(function (x1, x2) { return x1 - x2 }));
} else {
    console.log('корней нет');
}
