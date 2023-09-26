// 10. Неопытный Junior запушил в GitHub html файл с комментариями. Team Lead не
// оценил использование комментариев в ветке development и попросил их убрать.
// Вырезая куски кода вы поняли, что их чересчур много. Необходимо написать
// регулярное выражение, которое вырежет все комментарии из html разметки
// <!-- -->

const comment = `<body>
<!-- <h1>a form</h1> -->

<button>
    <!-- <a href="./a.html">go to a form</a> -->
    click
</button>
</body>`;

function deleteComment(comment) {
    try {
        if(/\<\!\-\-\ \<[a-z0-9]+\>[\w\ ]+\<\/[a-z0-9]+\> \-\-\>/gm.test(comment)) 
        return comment.replaceAll(/\<\!\-\-\ \<[a-z0-9]+\>[\w\ ]+\<\/[a-z0-9]+\> \-\-\>/gm, '')
        return comment
    } catch (error) {
        return error.message
    }
    
}
const res = deleteComment(comment)
console.log(res);