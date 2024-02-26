import {todo, project} from './class.js';
import './style.css';
import BirdCute from './images/birdcute.jpg'
import BirdMage from './images/birdmage.jpg'
import Delete from './images/delete_FILL0_wght400_GRAD0_opsz24.png'
import Edit from './images/edit_square_FILL0_wght400_GRAD0_opsz24.png'



const DOMController = (() => {
    const project_list = []
    let current_project_index = 0
    

    const projectbtn = () => {
    
        const projectbtns = document.querySelectorAll('.projectbtn')
        projectbtns.forEach((projectbtn) => {
            projectbtn.addEventListener("click", (event) => {
                const target = event.target
                console.log(target)
                const number = target.id
                console.log(number)
                DOMController.change_project(number)
                DOMController.load()
            })
        })
    }
    const initialSetup = () => {
        //inital setup code for todo
        //new todo("Todolist", "Completing Todo", new Date(), true)
        const my_project = new project("My Project", [new todo("Todolist", "Completing Todo", new Date(), true)]);
        project_list.push(my_project)

        // title, description, duedate, priority, notes, checklist

        // console.log(project_list)
        load()
    }
    const change_project = (num) => {
        current_project_index = num
    }
    const remove_project = (num
        ) => {
        project_list.splice(num, 1)
    }
    const load = () => {
        loadTabs()
        loadProject()
        projectbtn()
    }
    const taskModify = (taskItem) => {
        const modifybtns = document.createElement('div')
        
        const taskEdit = document.createElement('img')
        taskEdit.src = Edit
        taskEdit.classList.add('taskedit')
     
        modifybtns.append(taskEdit)

        const taskDelete = document.createElement('img')
        taskDelete.src = Delete
        taskDelete.classList.add('taskdelete')
     
        modifybtns.append(taskDelete)
        taskItem.append(modifybtns)
    }
    const projectEditForm = (dropdown, id) => {
        const form = document.createElement('form')
        form.setAttribute("id", `project-${id}`)
        dropdown.append(form)

        //title, description, duedate, priority
        
        //title
        const title_label = document.createElement('label')
        title_label.textContent = "Name:"
        title_label.setAttribute("for", "name")
        form.append(title_label)
        const title_input = document.createElement('input')
        title_input.setAttribute('type', "text")
        title_input.setAttribute('id', "name")
        title_input.setAttribute('name', "name")
        form.append(title_input)

        //buttons cancel submit
        const buttons = document.createElement('div')
        buttons.classList.add("buttons")
        form.append(buttons)
        const cancelbtn = document.createElement('button')
        cancelbtn.textContent = "Cancel"
        buttons.append(cancelbtn)
        const submitbtn = document.createElement('button')
        submitbtn.textContent = "Submit"
        buttons.append(submitbtn)
    }
    const todoEditForm = (dropdown, id) => {
        const form = document.createElement('form')
        form.setAttribute("id", `todo-${id}`)
        form.classList.add("todo_form")
        dropdown.append(form)

        //title, description, duedate, priority
        
        //title
        const title_label = document.createElement('label')
        title_label.textContent = "Title:"
        title_label.setAttribute("for", "title")
        form.append(title_label)
        const title_input = document.createElement('input')
        title_input.setAttribute('type', "text")
        title_input.setAttribute('id', "title")
        title_input.setAttribute('name', "title")
        form.append(title_input)

        //description
        const description_label = document.createElement('label')
        description_label.textContent = "Description: "
        description_label.setAttribute("for", "description")
        form.append(description_label)
        const description_input = document.createElement('input')
        description_input.setAttribute('type', 'text')
        description_input.setAttribute('id', "description")
        description_input.setAttribute('name', "description")
        form.append(description_input)

        //duedate
        const due_date_label = document.createElement('label')
        due_date_label.textContent = "Due Date: "
        due_date_label.setAttribute("for", "due_date")
        form.append(due_date_label)
        const due_date_input = document.createElement('input')
        due_date_input.setAttribute('type', 'date')
        due_date_input.setAttribute('id', 'due_date')
        due_date_input.setAttribute('name', 'due_date')
        form.append(due_date_input) 
        
        //priority
        const priority_label = document.createElement('label')
        priority_label.textContent = "Priority: "
        priority_label.setAttribute("for", "priority")
        form.append(priority_label)
        const priority_input = document.createElement('input')
        priority_input.setAttribute('type', 'checkbox')
        priority_input.setAttribute('id', 'priority')
        priority_input.setAttribute('name', 'priority')
        form.append(priority_input)
        
        //buttons cancel submit
        const buttons = document.createElement('div')
        buttons.classList.add("buttons")
        form.append(buttons)
        const cancelbtn = document.createElement('button')
        cancelbtn.textContent = "Cancel"
        buttons.append(cancelbtn)
        const submitbtn = document.createElement('button')
        submitbtn.textContent = "Submit"
        buttons.append(submitbtn)
    }
    const loadTabs = () => {
        const projectlist = document.querySelector('.project-list')
        projectlist.innerHTML = ""
        project_list.forEach((project, index) => {
            
            console.log(project)
            const projectbtn = document.createElement('button')
            projectbtn.textContent = project.name
            projectbtn.setAttribute("id", `${index}`)
            projectlist.append(projectbtn)
            projectbtn.classList.add('projectbtn')

            if (index == current_project_index){
                projectbtn.classList.add('selected')
            }
        })
    }
    const loadProject = () => {
        //project
        const project = project_list[current_project_index]
        //table
        const todo = document.querySelector('.todo')
        todo.innerHTML = ""
        // console.log(todo)

        //Adding Project title to dom
        const projectName = document.createElement('h3')
        projectName.textContent = project.name
        projectName.classList.add("project-title")
        todo.prepend(projectName)

        // console.log(project.tasklist)
        project.tasklist.forEach((task, index) => {
            const dropdown = document.createElement('div')
            dropdown.classList.add('dropdown')
            todo.append(dropdown)
            
            //makes table row
            const taskItem = document.createElement('div')
            dropdown.append(taskItem)
            taskItem.classList.add('taskItem')

            //Task title
            const taskTitle = document.createElement('h4')
            taskTitle.textContent = task.title
         
            taskItem.append(taskTitle)
           //adds edit
           taskModify(taskItem)
           

           const dropdownContent = document.createElement('div')
            dropdownContent.classList.add('dropdown-content')
            dropdown.append(dropdownContent)

            const projectEditContent = document.createElement('div')
            projectEditContent.classList.add('project-content')
            dropdown.append(projectEditContent)

            taskItem.setAttribute("id", index)

            const taskEdit = document.querySelector('.taskedit')
            taskEdit.addEventListener("click", (event) => {
                const parent = event.target.parentNode
                const id = parent.id
                console.log(id)
                projectEditContent.classList.toggle("show")
                dropdownContent.classList.remove("show")             
            })
            const taskDelete = document.querySelector('.taskdelete')
            taskDelete.addEventListener("click", (event) => {
                const target = event.target.parentElement.parentElement
                const id = target.id
                console.log(id)
                remove_project(id)
                load()
            })

            const projectEdit = document.querySelector('.taskItem')
            projectEdit.addEventListener("click", (event) => {
                const target = event.target
                const parent = target.parentNode
                const id = parent.id
                if(!target.matches(".taskedit")){
                    
                    console.log(id)
                    dropdownContent.classList.toggle("show")
                    projectEditContent.classList.remove("show")
                }
                
               
            })

            // adds dropdown content
            const tasklist = project.tasklist
            tasklist.forEach((task, i) => {
                const todo_item = document.createElement('div')
                dropdownContent.append(todo_item)
                todo_item.setAttribute("id", `${i}`)
                todo_item.classList.add('tododropdown')
                //title, description, duedate, priority

                const title = document.createElement('h3')
                title.textContent = task.title

                todo_item.append(title)

                const description = document.createElement('p')
                description.textContent = task.description
                todo_item.append(description)

                const time = document.createElement('p')
                console.log(task)
                time.textContent = `Due Date: ${task.duedate.toDateString()}`
                todo_item.append(time)

                const priority = task.priority
                if (priority) {
                    const needed = document.createElement('p')
                    needed.textContent = "High Priority"
                    todo_item.append(needed)
                }

                todoEditForm(todo_item, i)
            })
           // todoEditForm(dropdownContent, index)
           projectEditForm(projectEditContent, index)
            

        });

        
       
    }
    const addProject = () => {
        console.log("Added Project")
        let title = document.querySelector('#name')
        console.log(`Name value: ${title.value}`)
        let new_project = new project(title.value, []);
        project_list.push(new_project)
        
        load()
    }
    const addTodo = () => {
        
    }

    return {load, initialSetup, change_project, addProject}
})()
DOMController.initialSetup()



const projectdialog = () => {
    const dialog = document.querySelector(".project")
    const addtask = document.querySelector("#new_project")
    const closebtn = document.querySelector(".project .close")
    const submitbtn = document.querySelector(".project .submit")

    addtask.addEventListener("click", () => {
        dialog.showModal();
    });
    closebtn.addEventListener("click", () => {
        dialog.close();
    })

    submitbtn.addEventListener("click", (event) => {
        dialog.close()
        event.preventDefault()
        DOMController.addProject()
    })
}
const tododialog = () => {
    const dialog = document.querySelector(".new_todo")
    const addtask = document.querySelector("#new_todo")
    const closebtn = document.querySelector(".new_todo .close")
    const submitbtn = document.querySelector(".new_todo .submit")

    addtask.addEventListener("click", () => {
        dialog.showModal();
    });
    closebtn.addEventListener("click", () => {
        dialog.close();
    })

    submitbtn.addEventListener("click", (event) => {
        dialog.close()
        event.preventDefault()
        
    })
}
const todoitembtns = () => {
    const todos = document.querySelectorAll('.tododropdown')
    todos.forEach((todo) => {
        todo.addEventListener("click", (event) => {
            let target = event.target
           
            let id = `todo-${target.id}`
            
            let t = document.querySelector(`#${id}`)
            if(t == null){
                target = event.target.parentNode
           
                id = `todo-${target.id}`
                t = document.querySelector(`#${id}`)
            }

            t.classList.toggle('show')
        })
    })
}


const dialogController = (() => {
    // adds dialog event listener for project
    projectdialog()
    // adds event listener for todod
    tododialog()
    todoitembtns()
})()


