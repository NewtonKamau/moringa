// class Task {
//   done: boolean;
//   constructor(public description: string, public priority: string){
//     this.done = false;
//   }
//   markDone(){
//     this.done = true;
//   }
// }
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// var tasks: Task[] = [];
// tasks.push(new Task("Do the dishes.", "High"));
// tasks.push(new Task("Buy chocolate.", "Low"));
// tasks.push(new Task("Wash the laundry.", "High"));
// tasks[0].markDone();
// console.log(tasks);
//
// class WorkTask extends Task {
//   constructor(public dueDate: Date, public description: string, public priority: string){
//     super(description, priority);
//   }
// }
var Task = (function () {
    function Task(description, priority) {
        this.description = description;
        this.priority = priority;
        this.done = false;
    }
    Task.prototype.markDone = function () {
        this.done = true;
    };
    return Task;
}());
var HomeTask = (function (_super) {
    __extends(HomeTask, _super);
    function HomeTask() {
        return _super.apply(this, arguments) || this;
    }
    return HomeTask;
}(Task));
var WorkTask = (function (_super) {
    __extends(WorkTask, _super);
    function WorkTask(dueDate, description, priority) {
        var _this = _super.call(this, description, priority) || this;
        _this.dueDate = dueDate;
        _this.description = description;
        _this.priority = priority;
        return _this;
    }
    return WorkTask;
}(Task));
var HobbyTask = (function (_super) {
    __extends(HobbyTask, _super);
    function HobbyTask(description) {
        var _this = _super.call(this, description, "low") || this;
        _this.description = description;
        return _this;
    }
    return HobbyTask;
}(Task));
var tasks = [];
tasks.push(new HomeTask("Do the dishes.", "High"));
tasks.push(new HomeTask("Buy chocolate.", "Low"));
tasks.push(new HomeTask("Wash the laundry.", "High"));
tasks[0].markDone(); // mark the first task as done.
tasks.push(new HobbyTask("Practice origami."));
tasks.push(new HobbyTask("Bake a pie."));
var today = new Date(); // get the current date and store it in the variable called 'today'
var tomorrow = today; // set the variable tomorrow equal to the current date, but then reset it to today's date plus 1.
tomorrow.setDate(today.getDate() + 1);
var nextDay = today; // create another date object and set it to today's date plus 2.
nextDay.setDate(today.getDate() + 2);
tasks.push(new WorkTask(today, "Update blog.", "High"));
tasks.push(new WorkTask(tomorrow, "Go to meeting.", "Medium"));
tasks.push(new WorkTask(nextDay, "Clean ceiling.", "Low"));
console.log(tasks);
