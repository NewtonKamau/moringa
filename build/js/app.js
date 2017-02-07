var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ToDoList;
(function (ToDoList) {
    var Task = (function () {
        function Task(description, priority, assignedTo) {
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
            this.done = false;
            markDone();
            {
                this.done = true;
            }
        }
        return Task;
    }());
    ToDoList.Task = Task;
    var WorkTask = (function () {
        function WorkTask() {
        }
        return WorkTask;
    }());
    ToDoList.WorkTask = WorkTask;
    extend;
    Task;
    {
        constructor(public, description, string, public, priority, string, public, assignedTo ?  : IPerson);
        {
            _this = _super.call(this, description, priority) || this;
        }
    }
    var WorkTask = (function (_super) {
        __extends(WorkTask, _super);
        function WorkTask(dueDate, description, priority, assignedTo) {
            var _this = _super.call(this, description, priority, assignedTo) || this;
            _this.dueDate = dueDate;
            _this.description = description;
            _this.priority = priority;
            return _this;
        }
        return WorkTask;
    }(Task));
    ToDoList.WorkTask = WorkTask;
    var HobbyTask = (function (_super) {
        __extends(HobbyTask, _super);
        function HobbyTask(description) {
            var _this = _super.call(this, description, "low") || this;
            _this.description = description;
            return _this;
        }
        return HobbyTask;
    }(Task));
    ToDoList.HobbyTask = HobbyTask;
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interface.ts" />
var ToDoList;
(function (ToDoList) {
    var diane = {
        name: "Diane D",
        email: "[email protected]"
    };
    var thor = {
        name: "Thor son of Odin",
        email: "[email protected]"
    };
    var loki = {
        name: "God of mischief",
        email: "loki@geocities.com",
        phone: "555-666-7777"
    };
    ToDoList.people = {
        "diane": diane,
        "thor": thor,
        "loki": loki
    };
})(ToDoList || (ToDoList = {}));
///  <reference path="to-do-classes-interfaces.ts" />
///  <reference path="to-do-people.ts" />
var people = ToDoList.people;
var tasks = [];
tasks.push(new ToDoList.HomeTask("Do the dishes.", "High"));
tasks.push(new ToDolist.HomeTask("Buy chocolates.", "Low", people.diane));
tasks.push(new ToDoList.HomeTask("Wash the laundry.", "High"));
tasks.push(new ToDoList.HobbyTask("Pratices origami."));
tasks.push(new ToDoList.HobbyTask("Bake a pie."));
var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);
tasks.push(new ToDoList.WorkTask("Update blog.", "High", people.diane));
tasks.push(new ToDolist.WorkTask("Go to meeting.", "Medium", people.thor));
tasks.push(new ToDoList.WorkTask("Clean ceiling.", "low", people.loki));
console.log(tasks);
