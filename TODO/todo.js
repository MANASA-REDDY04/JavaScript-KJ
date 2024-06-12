let todoTasks = [
  {
    item:'Complete JS',
    dueDate: '2024-05-01'
  },
]
updateTask()

function addTask(){
  let inputValue = document.querySelector('#task-input');
  let dateValue = document.querySelector('#date-input');

  let task = inputValue.value;
  let date = dateValue.value;

  todoTasks.push(
    {
      item: task,
      dueDate: date
    });
  inputValue.value = '';
  dateValue.value = '';
  updateTask();
}

function updateTask(){
  let taskContainer = document.querySelector('.task-container');
  let newHtml = '';
  for(let i = 0; i < todoTasks.length; i++){
    let {item,dueDate} = todoTasks[i]
    newHtml += `
    <span>${item}</span>
    <span>${dueDate}</span>
    <button onclick = "todoTasks.splice(${i},1); updateTask();">Delete</button>
    `
  }
  taskContainer.innerHTML = newHtml;
}