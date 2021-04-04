import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js"
import { saveState } from "../Utils/LocalStorage.js"



class TasksService {

  submitTask(taskElement) {

    ProxyState.tasks.push(new Task(taskElement.taskItem, taskElement.listId))
    saveState()
    ProxyState.tasks = ProxyState.tasks
    console.log(taskElement.taskItem)
  }

  deleteTask(id) {
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
    console.log('deleteTask from TaskService')
    ProxyState.tasks = ProxyState.tasks
    saveState()
  }

}




export const tasksService = new TasksService()