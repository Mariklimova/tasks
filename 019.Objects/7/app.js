const obj = {}
let res = 0;

for (const key in obj) {
    if (key) {
        res++

    }
}
console.log(res == 0 ? false : true);
