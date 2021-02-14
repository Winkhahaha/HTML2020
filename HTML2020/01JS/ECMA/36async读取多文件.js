// 引入fs模块
const fs = require('fs');

// 读取文件1
function t1() {
    return new Promise((resolve, reject) => {
        fs.readFile('theis.txt', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}

// 读取文件1
function t2() {
    return new Promise((resolve, reject) => {
        fs.readFile('theis2.txt', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}

// 读取文件1
function t3() {
    return new Promise((resolve, reject) => {
        fs.readFile('theis3.txt', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}

// 声明async函数
async function main() {
    // 获取三个文本内容
    let a = await t1();
    let b = await t2();
    let c = await t3();
    console.log(`${a.toString()}\n${b.toString()}\n${c.toString()}`)
}

main();