const todo = class Todo {
    constructor(title, description, duedate, priority) {
        this.title = title;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
    }
    
}
const project = class Project {
    constructor(name, tasklist){
        this.name = name
        this.tasklist = tasklist
    }
}
export {todo, project}