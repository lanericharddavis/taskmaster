import { tasksService } from "../Services/TasksService.js"






//PUBLIC
export default class TasksController {

  submitTask(listId) {

    window.event.preventDefault()
    let form = window.event.target
    let taskElement = {
      taskItem: form['taskItem'].value,
      listId: listId
    }
    console.log("TaskSubmit from TasksController")
    tasksService.submitTask(taskElement)
    form.reset()
  }

  deleteTask(id) {
    if (window.confirm("Are You Sure You Want To Delete This Task?")) {
      tasksService.deleteTask(id);
    }

  }


}