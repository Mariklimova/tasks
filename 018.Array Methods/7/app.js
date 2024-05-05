// 7. На входе задан массив [‘hschool’, ‘hschool_0’, ‘hschool_1’]. Напишите все возможные
// способы обращения к первому и последнему элементам

const arr = ['hschool', 'hschool_0', 'hschool_1'];

// 1
console.log(arr[0] + ', ' + arr[arr.length - 1]);

// 2
console.log(arr.shift() + ', ' + arr.pop());

// 3
const arr3 = ['hschool', 'hschool_0', 'hschool_1'];
console.log(arr3.slice(0, 1) + ', ' + arr3.slice(2));

// 4
const arr4 = ['hschool', 'hschool_0', 'hschool_1'];

arr4.forEach(function (el, index) {
    if (index === 0 || index === arr4.length - 1) {
        console.log(el);
    }
})


// 5
arr4.forEach((el, index) => {
    if (index === 0 || index === arr4.length - 1) console.log(el);
})


// 6
const arr_5 = ['hschool', 'hschool_0', 'hschool_1'];

for (let i = 0; i < arr_5.length; i++) {
    if (i === 0 || i === arr_5.length - 1) {
        console.log(arr_5[i]);
    }
}

// 7
for (let i = 0; i < arr_5.length; i++) {
    if (i === 0 || i === arr_5.length - 1) console.log(arr_5[i]);
}


// 8
const arr_8 = ['hschool', 'hschool_0', 'hschool_1'];
const res = arr_8.filter((el, i) => i === 0 || i === arr_8.length - 1)
console.log(res);

// 9
const arr_9 = ['hschool', 'hschool_0', 'hschool_1'];
const result = arr_9.reduce((res, el, i) => {
    if (i === 0 || i === arr_9.length - 1) return [...res, el]
    else return res
}, [])
console.log(result);


// 10
const arr_10 = ['hschool', 'hschool_0', 'hschool_1'];
const [res_1, , res_2] = arr_10
console.log(res_1, res_2);


// 11
const arr_11 = ['hschool', 'hschool_0', 'hschool_1'];
console.log(arr_11.at(0));
console.log(arr_11.at(arr_11.length - 1));


// 12
const arr_12 = ['hschool', 'hschool_0', 'hschool_1'];
console.log(arr_12.slice(0, 1));
console.log(arr_12.slice(-1));
