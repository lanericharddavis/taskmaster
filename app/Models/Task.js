import { generateId } from "../Utils/GenerateId.js"

export default class Task {
  constructor(taskItem, taskId = generateId()) {
    this.taskId = taskId
    this.taskItem = taskItem
  }

  get Template() {
    return `
          <li class="list-group-item d-flex">
              <div class="form-check justify-content-between">
                <label class="form-check-label justify-content-between">
                   <input class="checkbox" type="checkbox"><p>${this.taskItem}</p>
                </label>
              </div>
              <button onclick="app.tasksController.deleteTask('${this.taskId}')" type="delete" class="btn btn-info" title='add list'><i class="fas fa-trash-alt"></i></button>
          </li>
    `
  }

}