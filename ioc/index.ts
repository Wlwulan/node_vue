/*ioc控制反转*/
import {Container, inject} from 'inversify';
import {interfaces, TYPE, httpGet, httpPost, controller,InversifyKoaServer} from 'inversify-koa-utils';
import {provide, buildProviderModule,fluentProvide} from "inversify-binding-decorators";
import TAGS from "../constant/tags";
import * as Router from "koa-router";
let provideThrowable = function(identider,name){
    return fluentProvide(identider)
    .whenTargetNamed(name)
    .done();
}
export {
    Router,
    Container,
    interfaces,
    TAGS,
    inject,
    httpGet,
    httpPost,
    controller,
    TYPE,
    provide,
    InversifyKoaServer,
    provideThrowable,
    buildProviderModule
}