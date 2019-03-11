import {
    Router,
    TAGS,
    interfaces,
    TYPE,
    httpGet,
    httpPost,
    controller,
    provideThrowable,
    inject
} from "../ioc";
import { URLSearchParams } from 'url';
@provideThrowable(TYPE.Controller,"ApiController")
@controller("/api")
export default class ApiController implements interfaces.Controller {
    private apiService;
    //AOP 面向切面编程
    constructor(@inject(TAGS.ApiService) apiService) {
        //DI 依赖注入
        this.apiService = apiService;
    }
    @httpGet("/")
    private async test(ctx:Router.IRouterContext,next:()=>Promise<any>) :Promise<any>{
        const result:Promise<Object> = await this.apiService.getInfo("http://192.168.2.120/wm-erp-php/web/index.php?r=customers/");
        return result;//吐出后台接口数据
        // ctx.body = result;
       // ctx.body= await ctx.render('index');
       //ctx.body="111"
    }
    @httpPost("/add")
    private async add(ctx:Router.IRouterContext,next:()=>Promise<any>) :Promise<any>{
        const params = new URLSearchParams();
        let option =  ctx.request.body;
        params.append('Customers[status]', option.status);
        params.append('Customers[name]', option.name);
        params.append('Customers[content]', option.content);
        const result:Promise<Object> = await this.apiService.getInfo("http://192.168.2.120/wm-erp-php/web/index.php?r=customers/create",{
            method:'POST',
            body:params
        });
        return result;//吐出后台接口数据
        // ctx.body = result;
       // ctx.body= await ctx.render('index');
       //ctx.body="111"
    }
}