import { generateId } from "../Utils/GenerateId.js"

export default class List {
  constructor(title, color, id = generateId()) {
    this.id = id
    this.title = title
    this.color = color
  }

  get Template() {

    return /*html*/`
            <div class="col-4 m-3">
                <div class="card">
                    <div class="card-header text-center bg-${this.color}">
                        <h4>${this.title}</h4>
                        <button type="delete" class="btn btn-info" title='add list'><i class="fas fa-trash-alt"></i></button>
                        <p>task#completed / total#tasks</p>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item d-flex">
                                <div class="form-check justify-content-between">
                                    <label class="form-check-label justify-content-between">
                                        <input class="checkbox" type="checkbox"><p>Find a Brain</p>
                                    </label>
                                </div>
                                <button type="delete" class="btn btn-info" title='add list'><i class="fas fa-trash-alt"></i></button>
                            </li>
                        </ul>
                        <div>
                            <div class="input-group mb-3 justify-content-between">
                                <input type="text" class="form-control" placeholder="Task Item To Do..."
                                    aria-label="Recipient's username" aria-describedby="button-addon2" required min="2"
                                    max="15">
                                <div class="input-group-append">
                                    <button type="submit" class="btn btn-info" title='add list'><i class="fas fa-plus"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
  }
}