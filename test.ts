// import { injectable, Container } from "inversify";
// import { fluentProvide, buildProviderModule } from "inversify-binding-decorators";

// let TYPE = {
//     Weapon : "Weapon",
//     Ninja: "Ninja"
// };
 
// @fluentProvide(TYPE.Weapon).whenTargetTagged("throwable", true).done();
// class Katana implements Weapon {
//     public hit() {
//         return "cut!";
//     }
// }
 
// @fluentProvide(TYPE.Weapon).whenTargetTagged("throwable", false).done();
// class Shuriken implements Weapon {
//     public hit() {
//         return "hit!";
//     }
// }
 
// @fluentProvide(TYPE.Ninja).done();
// class Ninja implements Ninja {
 
//     private _katana: Weapon;
//     private _shuriken: Weapon;
 
//     public constructor(
//         @inject(TYPE.Weapon) @tagged("throwable", false) katana: Weapon,
//         @inject(TYPE.Weapon) @tagged("throwable", true) shuriken: ThrowableWeapon
//     ) {
//         this._katana = katana;
//         this._shuriken = shuriken;
//     }
 
//     public fight() { return this._katana.hit(); };
//     public sneak() { return this._shuriken.throw(); };
 
// }
 
// var container = new Container();
// container.load(buildProviderModule());