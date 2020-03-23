// console.log("js");
$(document).ready(init);

const tasks = [];

function init() {
  $(".js-btn-add").on("click", addTask);
  $(".js-container").on("click", ".js-btn-complete", taskComplete);
}

function taskComplete(event) {
  // console.log("complete");
  // console.log("event:", event);
  // console.log("this", this);
  // console.log(tasks);

  const i = $(this).data("index");
  // console.log(i);
  // console.log(tasks[i].completed);
  if (tasks[i].completed === true) {
    tasks[i].completed = false;
  } else {
    tasks[i].completed = true;
  }

  // console.log(tasks);

  render();
}

function addTask() {
  // console.log("add task");
  const task = {
    name: $(".js-newTask").val(),
    completed: false
  };
  tasks.push(task);
  $(".js-newTask").val("");

  render();
  // console.log(tasks);
}

function render() {
  // console.log("render");
  $(".js-container").empty();

  for (let i = 0; i < tasks.length; i++) {
    const item = tasks[i];
    let completeBtn = `<button class="js-btn-complete" data-index='${i}'>Complete</button>`;

    if (item.completed === true) {
      completeBtn = `<button disabled class="js-btn-complete" data-index='${i}'>Complete</button>`;
    }

    $(".js-container").append(`
      <li>${item.name}${completeBtn}</li>
      `);
  }
}
