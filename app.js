loadEvents();


// add event listeners and functions to page
function loadEvents(){
    document.querySelector('form').addEventListener('submit', submit);
    document.getElementById('clear').addEventListener('click', clearList);

    document.querySelector('ul').addEventListener('click', deleteOrComplete)
}

//decide wheteher to delete or complete task

function deleteOrComplete(e){
    if(e.target.className == 'delete'){
        deleteTask(e);
    } else {
        completeTask(e);
    }
}


//deleteTask
function deleteTask(e){
    let removedNode = e.target.parentNode;
    let parentNode = removedNode.parentNode;
    parentNode.removeChild(removedNode);
}


//complete task

function completeTask(e){
    const task = e.target.nextSibling;
    if(e.target.checked){
        task.style.textDecoration = "line-through";
        task.style.color = "#ff000";
    } else {
        task.style.textDecoration = "none";
        task.style.color = "#2f4f4f";
    }
}



function clearList(e){
    let ul = document.querySelector('ul').innerHTML = '';
}

//submit data function
function submit(e){
    e.preventDefault();
    let input = document.querySelector('input');
    if(input.value != ''){
        addTask(input.value);
    } 
    
    input.value = '';
    
}

// add task to board
function addTask(task){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `<span class = "delete">x</span><input type="checkbox"><label>${task}</label>`;
    ul.appendChild(li);
    document.querySelector('.tasksWrapper').style.display = 'block';
}