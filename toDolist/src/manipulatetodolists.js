
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



// function setToDoComplete(index){
//    toDoList(index).state = 'complete';
// }

// function changeToDoPriority(index,preferedPriority){
//   toDoList(index).priority = preferedPriority;
// }

export default {toDo,createToDoItem};
// export default setToDoComplete;
// export default changeToDoPriority;