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
var UserComponent = (function () {
    function UserComponent(taskService) {
        this.taskService = taskService;
        //this.taskService.getTasks().then( tasks => this.tasks = tasks)
    }
    UserComponent.prototype.addTask = function (event) {
        event.preventDefault();
        console.log(this.title);
        //var newTask = {
        //    _id : this.id,    
        //    title:this.title
        //}
        //this.taskService.addTask(newTask).subscribe(task => { this.tasks.push(newTask); this.title=''});
    };
    UserComponent.prototype.deleteTask = function (id) {
        var tasks = this.tasks;
        console.log("id to be delted" + id);
        this.taskService.deleteTask(id)
            .subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < tasks.length; i++) {
                    if (tasks[i]._id == id) {
                        tasks.splice(i, 1);
                    }
                }
            }
        });
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
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _a || Object])
], UserComponent);
exports.UserComponent = UserComponent;
var _a;
//# sourceMappingURL=user.component.js.map