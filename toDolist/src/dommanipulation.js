import {toDoList,projectList,counter} from "./variables";


function createProjectTable(){
    let projectTable = document.createElement('h3');
    div.appendChild(projectTable);
    projectTable.innerHTML = "";
    projectTable.innerHTML = "Project";
    projectTable.style.cssText = "color:pink;"; 
} 

function pressNewProjectBtn(){
    counter++;  
    createProjectList(counter);
    console.log('hey',projectList);
}


const div = document.createElement('table');
document.querySelector(".content").appendChild(div);

function render (){
    div.innerHTML = '';
    div.innerHTML = "<tr><th>title</th> <th>description</th> <th>dueDate</th> <th>Priority</th><th>State</th>"
    div.style.cssText = "margin:0 auto;text-align:center; color:blue; font-size:1.2em";
     for (let j = 0; j < projectList.length; j++){
         createProjectTable();
         let removeProjectBtn = document.createElement('tr');
         div.appendChild(removeProjectBtn);
         removeProjectBtn.innerHTML = `<button id = "removebtn${j}" class = "remove-btn" > Remove </button>`
         let removePrButton = document.querySelector(`#removebtn${j}`);
         removePrButton.addEventListener('click', ()=>{
                        removeProject(j);
                        render();
                    })
          for (let i = 0; i < toDoList.length ; i++){
                let row = document.createElement('tr');
                div.appendChild(row);
                row.innerHTML =   `<td>${toDoList[i].title}</td>
                                    <td>${toDoList[i].description}</td>
                                    <td>${toDoList[i].dueDate}</td>
                                    <td ><input id = "priorityBtn${i}${j}" class = "priority-btn" type = 'number' value = ${toDoList[i].priority} ></td>
                                    <td><button id = "stateBtn${i}${j}" class = "state-btn" >${toDoList[i].state}</button></td>
                                    <button id = "removebtn${i}${j}" class = "remove-btn" > Remove </button>`;
                                    
                
    
                    let removeButton = document.querySelector(`#removebtn${i}${j}`);
                    removeButton.addEventListener('click', ()=>{
                        removeItem(i);
                        render();
                    })
    
                    let stateBtn = document.querySelector(`#stateBtn${i}${j}`);
                    stateBtn.addEventListener('click', ()=>{
                        toggleState(i);  
                        render(); 
                    })
    
                    let priorityBtn = document.querySelector (`#priorityBtn${i}${j}`);
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
        createToDoList(document.getElementById('title').value,document.getElementById('description').value,document.getElementById('dueDate').value,document.getElementById('priority').value,document.getElementById('state').value);
        toDoForm.innerHTML = '';
        toDoForm.style.cssText = 'style:none';
        render();
    });
});

const newProjectBtn = document.querySelector(".project-btn");
    newProjectBtn.addEventListener('click', ()=>{
        pressNewProjectBtn();
        render();
    })

// function projectPage(title,description,dueDate,priority,state){
//     let project = new toDo(title,description,dueDate,priority,state);
//     projectList.push(project);
//     toDoList.push(project);
//  }

export {counter,toDoList,projectList,createProjectTable,pressNewProjectBtn,div,render,newToDoButton,newProjectBtn};