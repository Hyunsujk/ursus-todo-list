console.log("js");
$(document).ready(init);

const tasks = [];

function init() {
  $(".js-btn-add").on("click", addTask);
  $(".js-container").on("click", ".js-btn-complete", taskComplete);
}

function taskComplete(event) {
  console.log("complete");
  console.log("event:", event);
  console.log("this", this);
  $(this).toggleClass(".js-btn-complete", "true");
  console.log(tasks);
}

function addTask() {
  console.log("add task");
  const task = {
    name: $(".js-newTask").val(),
    completed: false
  };
  tasks.push(task);
  $(".js-newTask").val("");

  render();
}

function render() {
  console.log("render");
  $(".js-container").empty();

  for (let i = 0; i < tasks.length; i++) {
    const item = tasks[i];
    $(".js-container").append(`
      <li>${item.name}<button class="js-btn-complete" data-index='${i}'>Complete</button></li>
      `);
  }
}
