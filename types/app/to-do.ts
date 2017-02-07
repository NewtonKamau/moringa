// class Task {
//   done: boolean;
//   constructor(public description: string, public priority: string){
//     this.done = false;
//   }
//   markDone(){
//     this.done = true;
//   }
// }

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
class Task {
  done: boolean = false;
  constructor(public description: string, public priority: string){}
  markDone(){
    this.done = true;
  }
}
class HomeTask extends Task {}

class WorkTask extends Task {
  constructor(public dueDate: Date, public description: string, public priority: string){
    super(description, priority);
  }
}

class HobbyTask extends Task {
  constructor(public description: string){
    super(description, "low");
  }
}

tasks.push(new HomeTask("Do the dishes.", "High"));
tasks.push(new HomeTask("Buy chocolate.", "Low"));
tasks.push(new HomeTask("Wash the laundry.", "High"));
tasks[0].markDone(); // mark the first task as done.

tasks.push(new HobbyTask("Practice origami."));
tasks.push(new HobbyTask("Bake a pie."));

var today = new Date();  // get the current date and store it in the variable called 'today'
var tomorrow = today;   // set the variable tomorrow equal to the current date, but then reset it to today's date plus 1.
tomorrow.setDate(today.getDate() + 1);
var nextDay = today;  // create another date object and set it to today's date plus 2.
nextDay.setDate(today.getDate() + 2);

tasks.push(new WorkTask(today, "Update blog.", "High"));
tasks.push(new WorkTask(tomorrow, "Go to meeting.", "Medium"));
tasks.push(new WorkTask(nextDay, "Clean ceiling.", "Low"));

console.log(tasks);
