import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import List from "../Models/List.js";


export function saveState() {
  localStorage.setItem('taskmaster', JSON.stringify({
    lists: ProxyState.lists,
    tasks: ProxyState.tasks
  }))
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('taskmaster'))
  if (data) {
    ProxyState.lists = data.lists.map(listElement => new List(listElement.name, listElement.color, listElement.id));
    ProxyState.tasks = data.tasks.map(taskElement => new Task(taskElement.taskItem, taskElement.listId, taskElement.id));
  }
}