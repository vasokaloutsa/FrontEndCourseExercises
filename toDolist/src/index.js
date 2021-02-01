let toDoList = [];
let projectList = [];
// import {toDo,createToDoItem} from './manipulatetodolists';
// import {manipulateDOM,render} from './dommanipulation';
// //import createToDoItem from './manipulatetodolists'

class toDo {
    constructor(title,description,dueDate,priority,state){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.state = state;
    }
    info(){
        return `${this.title} / ${this.description} /${this.dueDate} / ${this.priority} / ${this.state}`; 
    }
}

function createToDoItem(title,description,dueDate,priority,state){
    let toDoItem = new toDo(title,description,dueDate,priority,state);
    toDoList.push(toDoItem);
}

function removeItem(index){
    toDoList.splice(index,1);
}

function toggleState(index){
    if (window.confirm(`do you want to change '${toDoList[index].state}'?`)){
        if (toDoList[index].state.toLowerCase() === 'complete'){
            toDoList[index].state = 'not complete';
        
        }else if(toDoList[index].state.toLowerCase() === 'not complete') {
            toDoList[index].state = 'complete';
        }
        return toDoList[index].state;
    }else{
      return;
    }      
}

function changePriority(index,priorityNumber){
    toDoList[index].priority = priorityNumber;  
}

const div = document.createElement('table');
document.querySelector(".content").appendChild(div);
div.innerHTML = "<th>Title</th> <th>Author</th> <th>Pages</th> <th>Read / Not read yet</th>"
div.style.cssText = "margin:0 auto;text-align:center; color:blue; font-size:1.2em";


function render (){
   div.innerHTML = '';
   div.innerHTML = "<tr><th>title</th> <th>description</th> <th>dueDate</th> <th>state</th>'"
   div.style.cssText = "margin:0 auto;text-align:center; color:blue; font-size:1.2em";
   for (let j = 0 ; j < projectList.length ; j++){
       div.style.cssText = " margin:0 auto; text-align:center; border: 2px solid pink;"
        for (let i = 0; i < toDoList.length ; i++){
            let row = document.createElement('tr');
            div.appendChild(row);
            row.innerHTML =   `<td>${toDoList[i].title}</td>
                                <td>${toDoList[i].description}</td>
                                <td>${toDoList[i].dueDate}</td>
                                <td ><input id = "priorityBtn${i}" class = "priority-btn" type = 'number' value = ${toDoList[i].priority} ></td>
                                <td><button id = "stateBtn${i}" class = "state-btn" >${toDoList[i].state}</button></td>
                                <button id = "removebtn${i}" class = "remove-btn" > Remove </button>`;
                                
            

                let removeButton = document.querySelector(`#removebtn${i}`);
                removeButton.addEventListener('click', ()=>{
                    removeItem(i);
                    render();
                })

                let stateBtn = document.querySelector(`#stateBtn${i}`);
                stateBtn.addEventListener('click', ()=>{
                    toggleState(i);  
                    render(); 
                })

                let priorityBtn = document.querySelector (`#priorityBtn${i}`);
                priorityBtn.addEventListener('click',()=>{  
                    changePriority(i,priorityBtn.value);
                })
        }
    }
}

  const newToDoButton = document.querySelector('.add-btn');
        newToDoButton.addEventListener('click', ()=> {
        let toDoForm = document.createElement('form');
       document.querySelector(".bform").appendChild(toDoForm);
       toDoForm.innerHTML = `<section class = "form-inputs"><input type = 'text' id = 'title' class = 'formEl' name = 'title' placeholder ='toDo title'>
                          <input type = 'text' id = 'description' class = 'formEl' name = 'description' placeholder ='Description'>
                           <input type = 'text' id = 'dueDate' class = 'formEl' name = 'dueDate' placeholder ='Due Date'> 
                          <input type = 'text' id = 'priority' class = 'formEl' name = 'priority'  placeholder ='priority'>
                          <input type = 'text' id = 'state' class = 'formEl' name = 'state'  placeholder ='complete or not complete'>
                          <button type = 'submit' id ='submit-toDo' >Submit toDo</button></section>`
      toDoForm.style.cssText = " display: block;   margin:0 auto;  margin-top:20px;  width:80%;  min-height: 40px;  border:1px solid green;"

      let  submitBtn = document.querySelector('#submit-toDo');
      submitBtn.addEventListener('click' , ()=>{
        createToDoItem(document.getElementById('title').value,document.getElementById('description').value,document.getElementById('dueDate').value,document.getElementById('priority').value,document.getElementById('state').value);
        toDoForm.innerHTML = '';
        toDoForm.style.cssText = 'style:none';
        render();});
    });



// function projectPage(title,description,dueDate,priority,state){
//     let project = new toDo(title,description,dueDate,priority,state);
//     projectList.push(project);
//     toDoList.push(project);
//  }




createToDoItem('title','description','dueDate','1','complete');
createToDoItem ('title155','g5gh','235/2','51','complete');
render();
console.log(toDoList);