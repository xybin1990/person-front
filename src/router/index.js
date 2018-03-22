/**
 * Created by yuanbin.xie on 2017/3/16.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

/*
同步加载组件样式
import FlightListPanel from '../pages/flight-list-panel/flight-list-panel.vue'

*/

//异步加载组件样式
// const FlightListPanel = resolve => require(['../pages/flight-list-panel/flight-list-panel.vue'], resolve);

//pages是从DefinePlugin插件中获取参数pages的页面路径数组
let pagesArr = pages.map((cur, index, arr) => {
    return {
        path: `/${cur}`, //pages路径下的文件夹名 如: /home,/list等
        components: {
            main: () => import(`../pages/${cur}/${cur}.vue`)
        }
    }
});

let blocksArr = blocks.reduce((sumArr, cur, index, arr) => {
    //将解析的文件夹分离出来 板块文件夹名 和 里面的页面名数组
    let block = Object.keys(cur)[0];
    let pagesArr = Object.values(cur)[0];

    let blockPagesArr = pagesArr.map((c, i, a) => {
        return {
            path: `/${block}/${c}`, //pages路径下的文件夹名 如: /home,/list等
            components: {
                main: () => import(`../blocks/${block}/${c}/${c}.vue`)
            }
        }
    });

    return sumArr.concat(blockPagesArr)

}, []);

//将页面和板块页面合并
let arrList = pagesArr.concat(blocksArr);

import Home from '../pages/home/home.vue';

arrList.unshift({
    path: '/',
    components: {
        main: () => import('../pages/home/home.vue')
    }
});

Vue.use(VueRouter);

export default new VueRouter({
    routes: arrList
})