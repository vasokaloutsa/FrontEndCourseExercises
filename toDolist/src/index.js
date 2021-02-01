// variables declaration
let toDoList = [];
let projectList = [];
let toDoListItem=[];
let projectItem=[];
let counter = 0;


//classes

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

class doList{
    constructor(number,title,description,dueDate,priority,state){
        this.number = number;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.state = state;
    }
    info(){
        return ` ${this.number}/${this.title} / ${this.description} /${this.dueDate} / ${this.priority} / ${this.state}`; 
    }
}

//functions that manipulate lists

function createToDoItem(title,description,dueDate,priority,state){
   return new toDo(title,description,dueDate,priority,state);  
}

function createToDoList(title,description,dueDate,priority,state){
   toDoListItem = createToDoItem(title,description,dueDate,priority,state);
   toDoList.push(toDoListItem);
}

function createProjectList (number,title,description,dueDate,priority,state){
    projectItem = new doList(number,title,description,dueDate,priority,state);
    //createToDoList(title,description,dueDate,priority,state);
    // projectItem = createToDoList(title,description,dueDate,priority,state);
    projectList.push(projectItem);

    // let projectNumber = new project(name);
    // projectList.push(projectNumber);
    // projectNumber.push(toDoList);
}



function removeItem(index){
    toDoList.splice(index,1);
}

function removeProject(index2){
    projectList.splice(index2,1);
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



//DOM things

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
                                    <td ><input id = "priorityBtn${i}" class = "priority-btn" type = 'number' value = ${toDoList[i].priority} ></td>
                                    <td><button id = "stateBtn${i}" class = "state-btn" >${toDoList[i].state}</button></td>
                                    <button id = "removebtn${i}${j}" class = "remove-btn" > Remove </button>`;
                                    
                
    
                    let removeButton = document.querySelector(`#removebtn${i}${j}`);
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


// createProject('1');
//createToDoItem('title44','description3','dueDateefefe','12','complete');
//createToDoItem ('title155','g5gh','235/2','51','complete');
// createProject('2');
// createToDoList('trel','test1','now','3','complete')
// createToDoList('test2','test2','now','1','complete')
createProjectList('1','test2','test2','now','1','complete');


createProjectList('1','t34','test2','now','1','complete');
createProjectList('2','t34','test2','now','1','complete');
createToDoList('heee');


render();
console.log(toDoList);
console.log(projectList);

//console.log(projectList);