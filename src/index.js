import {todo, project} from './class.js';
import './style.css';
import BirdCute from './images/birdcute.jpg'
import BirdMage from './images/birdmage.jpg'
import Delete from './images/delete_FILL0_wght400_GRAD0_opsz24.png'
import Edit from './images/edit_square_FILL0_wght400_GRAD0_opsz24.png'
import { compareAsc, format } from "date-fns";

//local storage
function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }

  





const DOMController = (() => {
    let project_list = []
    let current_project_index = 0
    
    const defaultsetup = () => {
        //inital setup code for todo
        //new todo("Todolist", "Completing Todo", new Date(), true)
        const my_project = new project("My Project", [new todo("Todolist", "Completing Todo", 
        format(new Date(2014, 1, 11), "yyyy-MM-dd"), true)]);
        project_list.push(my_project)

        // title, description, duedate, priority, notes, checklist

        // console.log(project_list)
        load()
    }
    const setprojectlist = () => {
        const stored_project_list = localStorage.getItem("project_list")
        // project_list = stored_project_list
        console.log(stored_project_list)
        let arr = JSON.parse(stored_project_list);
        console.log(arr)
        project_list = arr
        current_project_index = localStorage.getItem("current_project")
        if (project_list == []){
            defaultsetup()
        }
        load()
    }
    const projectbtn = () => {
    
        const projectbtns = document.querySelectorAll('.projectbtn')
        projectbtns.forEach((projectbtn) => {
            projectbtn.addEventListener("click", (event) => {
                const target = event.target
                // console.log(target)
                const number = target.id
                current_project_index = number
                // console.log(number)
                DOMController.change_project(number)
                DOMController.load()
                saveData()
                
            })
        })
    }
    const initialSetup = () => {

        if (storageAvailable("localStorage")) {
            // Yippee! We can use localStorage awesomeness
            if (!localStorage.getItem("project_list") || !localStorage.getItem("current_project")) {
                defaultsetup()
              } else {
                setprojectlist()
              }
              
        } else {
            // Too bad, no localStorage for us
            defaultsetup()
        }
          
        
    }
    const change_project = (num) => {
        current_project_index = num
    }
    const remove_todo = (num
        ) => {
        const current_project = project_list[current_project_index]
        current_project.tasklist.splice(num, 1)
        saveData()
    }
    const remove_project = (num) => {
        project_list.splice(num, 1)
        if((current_project_index - 1) < 0 ) {
            current_project_index = 0
            console.log(project_list)
            if(project_list.length == 0){
                defaultsetup()
            }
           
        }else{
            current_project_index--;
        }
        saveData()
    }
    const load = () => {
        loadTabs()
        loadProject()
        projectbtn()
        loadImages()
        
    }
    // const taskModify = (taskItem) => {
    //     c
        
    // }
    // const projectEditForm = (dropdown, id) => {
    //     const form = document.createElement('form')
    //     form.setAttribute("id", `project-${id}`)
    //     console.log(form)
    //     dropdown.append(form)

    //     //buttons cancel submit
    //     const buttons = document.createElement('div')
    //     buttons.classList.add("buttons")
    //     form.append(buttons)
    //     const cancelbtn = document.createElement('button')
    //     cancelbtn.textContent = "Cancel"
    //     buttons.append(cancelbtn)
    //     const submitbtn = document.createElement('button')
    //     submitbtn.textContent = "Submit"
    //     buttons.append(submitbtn)   
    // }
    const todoEditForm = (dropdown, id) => {
        const form = document.createElement('form')
        form.setAttribute("id", `project-${id}`)
        console.log(form)
        dropdown.append(form)

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
        submitbtn.addEventListener("click", (event) => {
            // id
            event.preventDefault()
            DOMController.editTodo(id)
        })
    }
  
    
    const loadTabs = () => {
        const projectlist = document.querySelector('.project-list')
        projectlist.innerHTML = ""
        project_list.forEach((project, index) => {
            
            // console.log(project)
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
    const loadImages = () => {
        const images = document.querySelector(".images")
        images.innerHTML = ""
        const magebird = document.createElement('img')
        magebird.src = BirdMage
        magebird.classList.add('birdmage')
        
        images.append(magebird)
        const cutebird = document.createElement('img')
        cutebird.src = BirdCute
        cutebird.classList.add('birdcute')
        images.append(cutebird)
    }
    const loadProject = () => {
        //project
        const project = project_list[current_project_index]
        //table
        const todo = document.querySelector('.todo')
        todo.innerHTML = ""
        
        // console.log(todo)

        

        const modifybtns = document.createElement('div')
        modifybtns.classList.add('projectedit')

        //Adding Project title to dom
        const projectName = document.createElement('h3')
        projectName.textContent = project.name
        projectName.classList.add("project-title")
        modifybtns.prepend(projectName)

        // const magebird = document.createElement('img')
        // magebird.src = BirdMage
        // magebird.classList.add('birdmage')
     
        // modifybtns.append(magebird)
        
        const taskEdit = document.createElement('img')
        taskEdit.src = Edit
        taskEdit.classList.add('taskedit')
     
        modifybtns.append(taskEdit)

        const taskDelete = document.createElement('img')
        taskDelete.src = Delete
        taskDelete.classList.add('taskdelete')
     
        modifybtns.append(taskDelete)

        todo.append(modifybtns)
        
        
        taskDelete.addEventListener("click", (event) => {
            const target = event.target.parentElement.parentElement
            const id = target.id
            // console.log(id)
            remove_project(id)
            load()
        })
        const dialog = document.querySelector(".project_edit")
        
        const closebtn = document.querySelector(".project_edit .close")
        const submitbtn = document.querySelector(".project_edit .submit")

        taskEdit.addEventListener("click", () => {
            dialog.showModal();
        });
        closebtn.addEventListener("click", () => {
            dialog.close();
        })

        submitbtn.addEventListener("click", (event) => {
            dialog.close()
            event.preventDefault()
            DOMController.editProject()
        })

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
            taskItem.addEventListener("click", (event) => {
                const target = event.target
                const parent = target.parentNode
                const id = parent.id
                if(!target.matches(".taskedit")){
                    
                    // console.log(id)
                    dropdownContent.classList.toggle("show")
                    todoEditContent.classList.remove("show")
                }
                
               
            })
           //adds edit
           
           

           const dropdownContent = document.createElement('div')
            dropdownContent.classList.add('dropdown-content')
            dropdown.append(dropdownContent)

            const todoEditContent = document.createElement('div')
            todoEditContent.classList.add('todo-content')
            dropdown.append(todoEditContent)

            taskItem.setAttribute("id", index)

            
            
            
            

              

            // adds dropdown content
               

            const todo_item = document.createElement('div')
            dropdownContent.append(todo_item)
            todo_item.setAttribute("id", `${index}`)
            todo_item.classList.add('tododropdown')
            //title, description, duedate, priority
    
            const title = document.createElement('h3')
            title.textContent = task.title
    
            todo_item.append(title)
    
            const description = document.createElement('p')
            description.textContent = task.description
            todo_item.append(description)
    
            const time = document.createElement('p')
            // console.log(task)
            time.textContent = `Due Date: ${task.duedate}`
            todo_item.append(time)
    
            const priority = task.priority
            if (priority) {
                const needed = document.createElement('p')
                needed.textContent = "High Priority"
                todo_item.append(needed)
            }  
            todoEditForm(todoEditContent, index)
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
        taskDelete.addEventListener("click", (event) => {
            const target = event.target.parentElement.parentElement
            const id = target.id
            // console.log(id)
            remove_todo(id)
            load()
        })
        taskEdit.addEventListener("click", (event) => {
            const parent = event.target.parentNode
            const id = parent.id
            // console.log(id)
            todoEditContent.classList.toggle("show")
            dropdownContent.classList.remove("show")             
        })
        //    projectEditForm(projectEditContent, index)
            

        });

        
       
    }
    const saveData = () => {
        const converted_data = JSON.stringify(project_list)
        localStorage.setItem("project_list", converted_data)
        localStorage.setItem("current_project", current_project_index)
    }
    const addProject = () => {
        // console.log("Added Project")
        let name = document.querySelector('.project #name')
        // console.log(`Name value: ${name.value}`)
        let new_project = new project(name.value, []);
        project_list.push(new_project)
        saveData()
        
        load()
    }
    const editProject = () => {
        let name = document.querySelector('.project_edit #name')
        let new_project = new project(name.value, [])
        project_list[current_project_index] = new_project
        saveData()
        load()
    }
    const addTodo = () => {
        // console.log("Added Todo")
        let title = document.querySelector('dialog #title')
        let description = document.querySelector('dialog #description')
        let due_date = document.querySelector('dialog #due_date')
        let priority = document.querySelector('dialog #priority')
        let new_todo = new todo(title.value, description.value, due_date.value, priority.value)
        // console.log(new_todo)
        const current_project = project_list[current_project_index] 
        current_project.tasklist.push(new_todo)
        saveData()
        load()
        
        
    }
    const editTodo = (id) => {
        const form_id = `project-${id}`
        let form = document.querySelector(`#${form_id}`)
        console.log(form)
        let title = form.querySelector('#title')
        let description = form.querySelector('#description')
        let due_date = form.querySelector('#due_date')
        let priority = form.querySelector('#priority')
        let new_todo = new todo(title.value, description.value, due_date.value, priority.value)
        const current_project = project_list[current_project_index] 
        current_project.tasklist[id] = new_todo
        saveData()
        load()
    }

    return {load, initialSetup, change_project, addProject, addTodo, editProject, editTodo}
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
    //todo add
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
        DOMController.addTodo()
    })
}
// const todoitembtns = () => {
//     //makes todos have edit form
//     const todos = document.querySelectorAll('.tododropdown')
//     todos.forEach((todo) => {
//         todo.addEventListener("click", (event) => {
//             let target = event.target
           
//             let id = `todo-${target.id}`
            
//             let t = document.querySelector(`#${id}`)
//             if(t == null){
//                 target = event.target.parentNode
           
//                 id = `todo-${target.id}`
//                 t = document.querySelector(`#${id}`)
//             }

//             t.classList.toggle('show')
//         })
//     })
// }


const dialogController = (() => {
    // adds dialog event listener for project
    projectdialog()
    // adds event listener for todod
    tododialog()
    // todoitembtns()
})()


