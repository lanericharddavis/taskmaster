import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js"



class TasksService {

  submitTask(taskElement) {
    ProxyState.tasks.push(new Task(taskElement.name, taskElement.color))
    console.log("submitTask from TasksService")
    ProxyState.tasks = ProxyState.tasks
  }

  deleteTask(taskId) {
    ProxyState.tasks = ProxyState.tasks.filter(t => t.taskId != taskId)
  }

}




export const tasksService = new TasksService()