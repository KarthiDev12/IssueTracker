"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app.routing.module");
var app_component_1 = require("./app.component");
var user_component_1 = require("./components/users/user.component");
//import { SkillsComponent }   from './components/users/skills.component';
var alert_services_1 = require("./components/alerts/alert.services");
var alert_component_1 = require("./components/alerts/alert.component");
var login_service_1 = require("./components/services/login.service");
var home_component_1 = require("./components/login/home.component");
var login_components_1 = require("./components/login/login.components");
require("rxjs/Rx");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, app_routing_module_1.AppRoutingModule,
        ],
        declarations: [app_component_1.AppComponent, user_component_1.UserComponent, alert_component_1.AlertComponent, login_components_1.LoginComponents, home_component_1.HomeComponent],
        providers: [alert_services_1.AlertService, login_service_1.LoginServices],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map