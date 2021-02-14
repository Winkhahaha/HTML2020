// 引入fs模块
const fs = require('fs');
// 1 调用方法读取文件
// fs.readFile('theis.txt', (err, data) => {
//     // 如果失败则抛出错误
//     if (err) throw err;
//     // 如果没有出错,输出内容
//     console.log(data.toString());
// });


// 2 使用Promise封装
const p = new Promise(function (resolve, reject) {
    fs.readFile('theis.txt', (err, data) => {
        // 如果失败则抛出错误
        if (err) reject(err);
        // 如果成功
        resolve(data);
    });
}).then((value) => console.log(value.toString()),
    (reason) => console.log("读取文件失败!"));