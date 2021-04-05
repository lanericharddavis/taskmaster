import { tasksService } from "../Services/TasksService.js"






//PUBLIC
export default class TasksController {


  submitTask(listId) {
    window.event.preventDefault()
    let form = window.event.target
    let taskElement = {
      taskItem: form['taskItem'].value,
      listId: listId,
      // taskCompletion: taskChecked
    }
    console.log("TaskSubmit from TasksController")
    tasksService.submitTask(taskElement)
    form.reset()
  }

  deleteTask(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          tasksService.deleteTask(id),
          'Deleted!'
        )
      }
    })
  }

  // Trying to make a function to confirm if my tasks checkbox is checked or not, then assigning that value to the taskCompletion property.  Keeps returning taskChecked is undefined.
  // checkBox() {
  //   let taskChecked = false;
  //   if (document.getElementById('taskCheckbox').checked) {
  //     taskChecked = true;
  //   }
  // }
}
