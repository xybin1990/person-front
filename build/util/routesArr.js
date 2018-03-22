let fs = require('fs');
let path = require('path');

//页面组件路由列表
let pagesArr = fs.readdirSync(path.join(__dirname, '../../src/pages'));
console.log(__dirname);

let blocks = [];
//板块页面路由列表
try {
    //如果不存在文件夹返回空数组
    blocks = fs.readdirSync(path.join(__dirname, '../../src/blocks'));
} catch (error) {
    blocks = [];
}
// let blocks = fs.readdirSync(path.join(__dirname, '../../src/blocks'));
let blocksArr = blocks.map((cur, index, arr) => {
    return {
        [cur]: fs.readdirSync(path.join(__dirname, `../../src/blocks/${cur}`))
    }
});

module.exports.pagesArr = pagesArr;
module.exports.blocksArr = blocksArr;