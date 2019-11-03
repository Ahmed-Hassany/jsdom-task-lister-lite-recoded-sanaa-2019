document.addEventListener("DOMContentLoaded", () => {
    // your code here
    document.getElementById("create-task-form").addEventListener("submit", function (Event) {
        const desc = document.getElementById("new-task-description").value;
        let newItem = document.createElement("li");
        newItem.innerText = desc;
        let newBtn = document.createElement("button");
        newBtn.innerText = "X";
        newBtn.id = "xBtn";
        newItem.appendChild(newBtn);
        document.getElementById("tasks").appendChild(newItem);
        Event.preventDefault();
    });
    document.addEventListener("click", function (e) {
        if (e.target && e.target.id == "xBtn")
            e.target.parentElement.remove();
    })
});
