// 15. Пользователь вводит строку. Необходимо вывести все гласные отдельной строкой
// fullstack => ua


let str = 'fullstack';
let gl = 'eyuoia'


// 1
for (let i = 0; i< str.length; i++) {
   if(gl.includes(str[i])){
    console.log(str[i]);
   }
}

// 2
for (let i = 0; i < str.length; i++) {
    if (str[i] == 'e'||str[i] == 'y'||str [i]== 'u'||str[i] == 'o'||str[i] == 'i'||str[i] == 'a') {
       console.log(str[i]);
    }
    
}

// 3
let res = '';
for (let i = 0; i< str.length; i++) {
    if(gl.includes(str[i])){
     console.log(str[i]);
     res +=str[i]
    }
 }
 console.log(res);
 