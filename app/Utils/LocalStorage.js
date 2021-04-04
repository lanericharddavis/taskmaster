import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import List from "../Models/List.js";


export function saveState() {
  localStorage.setItem('taskmaster', JSON.stringify({
    lists: ProxyState.lists,
    tasks: ProxyState.tasks
  }))
}

// Reloading the page from local storage is loading the list, but not the tasks within it.  However, it displays in the inspectors Application that local storage is saving old listIds and reflecting that number on my counter below the lists name on the screen
export function loadState() {
  let data = JSON.parse(localStorage.getItem('taskmaster'))
  if (data) {
    ProxyState.lists = data.lists.map(listElement => new List(listElement.name, listElement.color, listElement.id, listElement.taskCount));
    ProxyState.tasks = data.tasks.map(taskElement => new Task(taskElement.taskItem, taskElement.listId, taskElement.id));
  }
}