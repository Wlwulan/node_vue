import {
    Router,
    TAGS,
    interfaces,
    TYPE,
    httpGet,
    controller,
    provideThrowable,
    inject
} from "../ioc";
@provideThrowable(TYPE.Controller,"IndexController")
@controller("/")
export default class IndexController implements interfaces.Controller {
    // private apiService;
    // //AOP 面向切面编程
    // constructor(@inject(TAGS.ApiService) apiService) {
    //     //DI 依赖注入
    //     this.apiService = apiService;
    // }
    constructor(){
        
    }
    @httpGet("/")
    private async test(ctx:Router.IRouterContext,next:()=>Promise<any>) :Promise<any>{
        // const result:Promise<Object> = await this.apiService.getInfo("http://localhost:4000/");
        // return result;//吐出后台接口数据
        // ctx.body = result;
       ctx.body= await ctx.render('index');
    }
}