const start = document.getElementById('submit');

start.onclick = function (e) {
  e.preventDefault();
  const task = document.getElementById("taskInput").value;
  const list = document.getElementById("list");
  const taskContainer = document.createElement("div");
  const newTask = document.createElement("input");
  const taskLabel = document.createElement("label");
  const taskDescription = document.createTextNode(task);

  newTask.setAttribute("type", "checkbox");
  newTask.setAttribute("name", task);

  taskLabel.setAttribute("for", task);
  taskLabel.appendChild(taskDescription);

  taskContainer.classList.add('task')
  taskContainer.appendChild(newTask);
  taskContainer.appendChild(taskLabel);
  list.appendChild(taskContainer);
};
