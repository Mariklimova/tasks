// 11. *Создайте класс PascalsTriangle, который будет принимать количество строк
// numRows и содержать метод generateTriangle(), возвращающий первые
// numRows строк треугольника Паскаля.
// Входные: new PascalsTriangle(5).generateTriangle() → Результат: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1],
// [1, 4, 6, 4, 1]]
// Входные: new PascalsTriangle(1).generateTriangle() → Результат: [[1]]


class PascalsTriangle {
    constructor(numRows) {
        this.numRows = numRows
    }
    generateTriangle() {
        
        const triangle = [];

        for (let i = 0; i < this.numRows; i++) {
            const row = [];
            for (let j = 0; j <= i; j++) {
                if (j === 0 || j === i) {
                    row.push(1);
                } else {
                    row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
                }

            }
            triangle.push(row);
        }
        return triangle
    }
}

const pascalsTriangle = new PascalsTriangle(7);
console.log(pascalsTriangle.generateTriangle());




















