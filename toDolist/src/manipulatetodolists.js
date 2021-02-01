
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

export default {toDo,createToDoItem,removeItem,toggleState,changePriority};