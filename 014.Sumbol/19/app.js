// 19. На вход программе подается строка из букв А, Г, Ц, Т. Напишите программу,
// которая подсчитывает сколько букв
// АааГГЦЦцТТтттА => А – 4; Г – 2; Ц – 3; Т – 5

let str = 'АааГГЦЦцТТтттА'.toUpperCase();
let a = 0;
let g = 0;
let c = 0;
let t = 0;


// 1
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === 'А') {
//         a++;
//     } else if (str[i] === 'Г') {
//         g++;
//     } else if (str[i] === 'Ц') {
//         c++;
//     } else if (str[i] === 'Т') {
//         t++;
//     }
// }
// console.log(`${'А - '} ${a}${'; Г - '}${g}${'; Ц - '}${c}${'; Т - '}${t} `)



// 2
for (const el of str) {
    switch (el) {
        case 'А':
            a++
            break;
        case 'Г':
            g++;
            break;
        case 'Ц':
            c++;
            break;
        case 'Т':
            t++;
            break;

        default:
            break;
    }

}
console.log(`${'А - '} ${a}${'; Г - '}${g}${'; Ц - '}${c}${'; Т - '}${t} `)