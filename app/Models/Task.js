import { generateId } from "../Utils/GenerateId.js"

export default class Task {
  constructor(taskItem, listId, taskCompletion, id = generateId()) {
    this.taskItem = taskItem
    this.listId = listId
    this.taskCompletion = taskCompletion
    this.id = id
  }

  get Template() {
    return `
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="taskCheckbox" onclick="app.tasksController.checkBox()">
        <label class="form-check-label" for="taskCheckbox">
           <p>${this.taskItem} <i class="fas fa-times ml-2 text-danger" onclick="app.tasksController.deleteTask('${this.id}')"></i></p>
        </label>
      </div>
    `
  }

}