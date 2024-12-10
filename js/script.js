let taskInput = document.querySelector(".taskInput");
let taskButton = document.querySelector(".taskButton");
let inputDate = document.querySelector(".inputDate");
let ul = document.querySelector("ul");
let taskArr = [];

taskButton.addEventListener("click", function () {
  taskArr.push({
    task: taskInput.value,
    date: inputDate.value,
  });
  displayUpdate();
  taskInput.value = "";
});

function displayUpdate() {
  ul.innerHTML = "";
  taskArr.map((task, idx) => {
    ul.innerHTML += `<li> ${idx} ${task.task} --- ${task.date} <button class="delete">Delete</button></li>`;
  });

  let deleteButton = document.querySelectorAll(".delete");
  let deleteArr = Array.from(deleteButton);

  deleteArr.map((button, index) => {
    button.addEventListener("click", function () {
      console.log("delete", index);
      taskArr.splice(index, 1);
      console.log(taskArr);
      displayUpdate();
    });
  });
}

