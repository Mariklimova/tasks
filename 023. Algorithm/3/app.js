// 3. На входе два массива чисел. Реализуйте функцию, которая проверяет, есть ли в
// обоих массивах хотя бы один общий элемент, и возвращает true, если такой
// элемент найден. Если нет общих элементов, функция возвращает false.


const arr1 = [1, 2, 3, 4, 5, 6, 7]

const arr2 = [1, 90, 234]

function checkValidArs(arr1, arr2) {
    const res1 = arr1.every((el) => !isNaN(el));
    const res2 = arr2.every((el) => !isNaN(el));

    return res1 && res2;
}

function twinNnm(arr1, arr2) {
    if (checkValidArs(arr1, arr2)) return arr1.some((el) => arr2.includes(el));
    else return 'error';
}
const res = twinNnm(arr1, arr2)
console.log(res);