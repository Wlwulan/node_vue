import * as bodyParser from "koa-bodyparser";//通过koa-bodyparser解析之后，在koa中this.body就能直接获取到数据
import "reflect-metadata";
import {Container, buildProviderModule, InversifyKoaServer} from "./ioc";
import "./ioc/loader";
import * as serve from 'koa-static';
import * as render from 'koa-swig';
import * as co from 'co';
import {historyApiFallback} from 'koa2-connect-history-api-fallback';//适配vue history的中间件
//import config from './config';
//import * as path from 'path';
//IOC 控制反转
const container = new Container();
container.load(buildProviderModule());

let server = new InversifyKoaServer(container);
server.setConfig(app => {
    //设置中间件
    app.use(bodyParser());
    app.use(serve('./assets'));
    app.context.render = co.wrap(render({
        root:'./views',
        autoescape: true,
        cache:false,
        ext:'html',
        varControls: ["[[", "]]"],
        writeBody:false
    }));
    app.use(historyApiFallback({
        index:'/',
        whiteList:['/api']
    }))
})
.setErrorConfig(app=>{
    console.log(app);
})

let app =  server.build();
//配置静态资源
app.listen(3001,()=>{
    console.log("系统启动成功🍎");
})