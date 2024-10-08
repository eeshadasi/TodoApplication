document.getElementById('add-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.classList.add('remove-btn');
    removeBtn.onclick = function () {
        li.remove(); // Remove the task when clicked
    };

    li.appendChild(removeBtn);
    document.getElementById('task-list').appendChild(li);

    // Clear the input field
    taskInput.value = "";
}
