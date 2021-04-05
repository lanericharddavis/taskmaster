import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js"
import { saveState } from "../Utils/LocalStorage.js"



class TasksService {

  submitTask(taskElement) {

    ProxyState.tasks.push(new Task(taskElement.taskItem, taskElement.listId, taskElement.taskCompletion))
    ProxyState.tasks = ProxyState.tasks
    console.log(taskElement.taskItem)
    saveState()
  }

  deleteTask(id) {
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
    console.log('deleteTask from TaskService')
    saveState()
  }

}




export const tasksService = new TasksService()