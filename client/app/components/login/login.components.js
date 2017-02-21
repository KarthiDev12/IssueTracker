"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var login_service_1 = require("../services/login.service");
var alert_services_1 = require("../alerts/alert.services");
var router_1 = require("@angular/router");
var LoginComponents = (function () {
    //login:Login;
    function LoginComponents(loginservice, router, alertService) {
        this.loginservice = loginservice;
        this.router = router;
        this.alertService = alertService;
    }
    LoginComponents.prototype.authentication = function (username, password) {
        var _this = this;
        console.log('inside authenticaaaaa' + this.username + this.password);
        this.loginservice.getAuth(this.username, this.password).subscribe(function (user) {
            _this.user = user;
            //console.log('outputtttt'+this.user.name); 
            if (null != _this.user && undefined != _this.user) {
                console.log('inside if ');
                _this.router.navigate(['/home', _this.username]);
                console.log('inside if ' + _this.username);
            }
            else {
                console.log("Entered else case");
                _this.alertService.error('Username or password incorrect', false);
            }
        });
        // this.router.navigate(['/Home',this.username]);
        //.subscribe(login=>{console.log(' loooooooo'+login.name)})
    };
    return LoginComponents;
}());
LoginComponents = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login',
        templateUrl: 'login.screen.html'
    }),
    __metadata("design:paramtypes", [login_service_1.LoginServices, router_1.Router, alert_services_1.AlertService])
], LoginComponents);
exports.LoginComponents = LoginComponents;
//# sourceMappingURL=login.components.js.map