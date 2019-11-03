document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("create-task-form").addEventListener("submit", function(Event){
    const desc = document.getElementById("new-task-description").value;
    let newItem = document.createElement("li");
    newItem.innerText = desc;
    document.getElementById("tasks").appendChild(newItem);
    Event.preventDefault();
  })
});
