// 11. На вход программе подается натуральное число n. Напишите программу, которая
// печатает звездный треугольник.
// 7 -> *******
// ******
// *****
// ****
// ***
// **
// *



let n = 7;
for (let i = n; i >= 0; i--) {
    console.log('*'.repeat(i));
}