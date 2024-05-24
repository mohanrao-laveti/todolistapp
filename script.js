function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task.");
        return;
    }

    var li = document.createElement("li");
    li.textContent = taskInput.value;
    var deleteBtn = document.createElement("span");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}
