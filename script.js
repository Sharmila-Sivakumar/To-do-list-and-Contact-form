function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }
  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;
  // Toggle complete
  span.onclick = () => {
    li.classList.toggle("completed");
  };
  // Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "✖";
  delBtn.className = "delete-btn";
  delBtn.onclick = () => {
    taskList.removeChild(li);
  };
  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);
  input.value = "";
}
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields!");
    return false;
  }
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address!");
    return false;
  }
  alert("Form submitted successfully!");
  return true;
}
