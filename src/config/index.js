//配置文件
//设置接口请求地址 本地开发关闭 生产环境打开
let baseURL = null;
if (process.env.NODE_ENV === "dev") {
    //测试环境
    let baseURL = "http://http://47.75.47.239:3000/";
} else if (process.env.NODE_ENV === "production") {
    //生产环境
    let baseURL = "http://http://47.75.47.239:3000/";
}

export {baseURL}