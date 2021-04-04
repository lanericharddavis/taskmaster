import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import List from "../Models/List.js";


export function saveState() {
  localStorage.setItem('taskmaster', JSON.stringify({
    lists: ProxyState.lists,
    tasks: ProxyState.tasks
  }))

}

// When page refresh happens, the tasks inside the list are no longer displayed on the list, however, they are still reflected as being stored on local storage and now because they are not displayed on screen, have no way of being deleting.
export function loadState() {
  let data = JSON.parse(localStorage.getItem('taskmaster'))
  if (data) {
    ProxyState.lists = data.lists.map(listElement => new List(listElement.name, listElement.color, listElement.taskCount, listElement.id));
    ProxyState.tasks = data.tasks.map(taskElement => new Task(taskElement.taskItem, taskElement.listId, taskElement.id));
  }
}