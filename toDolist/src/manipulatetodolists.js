import {toDoList, projectList, toDoListItem,projectItem} from "./variables"

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
    //if i put createtolist i get another result
    //projectItem = createToDoList(title,description,dueDate,priority,state);
    createToDoList(title,description,dueDate,priority,state);
    projectList.push(projectItem);
}



function removeItem(index){
    toDoList.splice(index,1);
}

function removeProject(index){
    projectList.splice(index,1);
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

export {toDoList, projectList, toDoListItem, projectItem, toDo,doList,createToDoItem,createToDoList,removeItem,removeProject,createProjectList,toggleState,changePriority};
