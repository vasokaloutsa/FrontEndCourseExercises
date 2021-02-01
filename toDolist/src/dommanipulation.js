function manipulateDOM(){
    const div = document.createElement('table');
    document.querySelector(".content").appendChild(div);
    div.innerHTML = "<th>Title</th> <th>Author</th> <th>Pages</th> <th>Read / Not read yet</th>"
    div.style.cssText = "margin:0 auto;text-align:center; color:blue; font-size:1.2em";
}

function render (){
    tablemain.innerHTML = '';
    tablemain.innerHTML = "<tr><th>title</th> <th>description</th> <th>dueDate</th> <th>state</th>'"
    tablemain.style.cssText = "margin:0 auto;text-align:center; color:blue; font-size:1.2em";
    for (let i = 0; i < toDoList.length ; i++){
      let row = document.createElement('tr');
      tablemain.appendChild(row);
      row.innerHTML =   `<td>${toDoList[i].title}</td>
                         <td>${toDoList[i].description}</td>
                         <td>${toDoList[i].dueDate}</td>
                         <td>${toDoList[i].state}</td>`
                         
    }
}

export default {manipulateDOM,render};