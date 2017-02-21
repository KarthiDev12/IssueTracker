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
var user_service_1 = require("./user.service");
var alert_services_1 = require("../alerts/alert.services");
var router_1 = require("@angular/router");
var UserComponent = (function () {
    function UserComponent(taskService, alertService, router) {
        this.taskService = taskService;
        this.alertService = alertService;
        this.router = router;
        this.query = '';
        this.skillList = ["JAVA", ".NET", "C++", "C", "PHP", "NODE",
            "ANGULAR2", "MONGO", "MYSQL", "EXPRESS",
        ];
        this.filteredList = [];
        this.skills = [];
        //this.taskService.getTasks().then( tasks => this.tasks = tasks)
    }
    UserComponent.prototype.addTask = function (event) {
        var _this = this;
        event.preventDefault();
        console.log(this.name);
        console.log(this.email);
        console.log(this.skills);
        var newUser = {
            _id: this.id,
            name: this.name,
            skills: this.skills,
            email: this.email,
            password: this.password,
            project: this.project
        };
        this.taskService.addUser(newUser).subscribe(function (data) {
            _this.alertService.success('User created successfully', false);
            _this.clearUser();
            console.log("Inside submit" + newUser.name);
            _this.router.navigate(['/home', newUser.name]);
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    UserComponent.prototype.clearUser = function () {
        this.name = '';
        this.email = '';
        this.password = '';
        this.skills = [];
        this.project = '';
    };
    UserComponent.prototype.deleteTask = function (id) {
        var users = this.users;
        console.log("id to be delted" + id);
        this.taskService.deleteTask(id)
            .subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < users.length; i++) {
                    if (users[i]._id == id) {
                        users.splice(i, 1);
                    }
                }
            }
        });
    };
    UserComponent.prototype.filter = function () {
        if (this.query !== "") {
            this.filteredList = this.skillList.filter(function (el) {
                return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }.bind(this));
        }
        else {
            this.filteredList = [];
        }
    };
    UserComponent.prototype.select = function (item) {
        this.skills.push(item);
        this.query = '';
        this.filteredList = [];
    };
    UserComponent.prototype.remove = function (item) {
        this.skills.splice(this.skills.indexOf(item), 1);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'user',
        providers: [user_service_1.UserService],
        templateUrl: 'user.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, alert_services_1.AlertService, router_1.Router])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map