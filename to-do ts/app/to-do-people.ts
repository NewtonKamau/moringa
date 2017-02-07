/// <reference path="to-do-classes-interfaces.ts" />
module ToDoList {
  var Ruth: ToDoList.IPerson = {
    name: "Ruth ",

  }

  var Newton: ToDoList.IPerson = {
    name: "Newton",

  }

  var Ian: ToDoList.IPerson = {
    name: "Ian",
  }

  export var people = {
    "Ruth": Ruth,
    "Newton": Newton,
    "Ian": Ian,
  };
}
