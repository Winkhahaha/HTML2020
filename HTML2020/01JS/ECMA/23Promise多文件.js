// 引入fs模块
const fs = require('fs');
// 1 调用方法读取文件
// fs.readFile('theis.txt', (err, data1) => {
//     fs.readFile('theis2.txt', (err, data2) => {
//         fs.readFile('theis3.txt', (err, data3) => {
//             let result = data1 + '\n' + data2 + '\n' + data3;
//             console.log(result);
//         });
//     });
// });


// // 2 使用Promise封装
const p = new Promise(function (resolve, reject) {
    fs.readFile('theis.txt', (err, data1) => {
        // 如果成功
        resolve(data1);
    });
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('theis2.txt', (err, data2) => {
            // 如果成功
            resolve([value, data2]);
        });
    })
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('theis3.txt', (err, data3) => {
            // 如果成功
            value.push(data3)
            resolve(value);
        });
    })
}).then(value => {
    console.log(value.join('\r\n'));
});