// import {join} from "path";
// import {extend} from "lodash";
// console.log("取到的环境变量", process.env.NODE_ENV);
// let config = {
//     viewDir:join(__dirname,"..","views"),
//     staticDir:hoin(__dirname,"..","assets")
// }
// const mergeconfig = () => {
//     //开发环境
//     if(process.env.NODE_ENV == "development"){
//         const localConfig = {
//             port:8081
//         }
//     }
//     config = extend(config,localConfig)
//     //上线环境
//     if(process.env.NODE_ENV == "production"){
//         const proConfig = {
//             port:80
//         }
//     }
//     config = extend(config,proConfig)
//     return config;
// }
// export default mergeconfig()