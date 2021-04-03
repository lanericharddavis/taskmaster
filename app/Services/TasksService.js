import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js"



class TasksService {

  submitTask(taskElement) {

    ProxyState.tasks.push(new Task(taskElement.taskItem, taskElement.listId))
    console.log(taskElement.taskItem, taskElement.listId)
    ProxyState.tasks = ProxyState.tasks
  }

  deleteTask(id) {
    let taskCount = ProxyState.taskCount
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
    console.log('deleteTask from TaskService')
    ProxyState.tasks = ProxyState.tasks
  }

}




export const tasksService = new TasksService()