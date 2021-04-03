import { tasksService } from "../Services/TasksService.js"






//PUBLIC
export default class TasksController {

  submitTask() {
    debugger
    window.event.preventDefault()
    let form = window.event.target
    let taskElement = {
      taskItem: form['taskItem'].value,
      listId: listId
    }
    tasksService.submitList(taskElement)
    console.log("submitTask button from TasksController")
  }

  deleteTask(taskId) {
    tasksService.deleteList(taskId)
  }


}