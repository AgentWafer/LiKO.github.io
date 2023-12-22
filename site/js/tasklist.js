const form = document.querySelector("form")
const buttonClear = document.getElementById("clear-tasks")
const ul = document.querySelector("ul")
const input = document.getElementById("new-task")

let tasklist = localStorage.getItem("tasks")? JSON.parse(localStorage.getItem("tasks")) : []
localStorage.setItem("tasks", JSON.stringify(tasklist))

const newTask = (text) => {
    const li = document.createElement("li")
    li.textContent = text
    ul.appendChild(li)

    const button = document.createElement("button")
    button.textContent = "Удалить"
    button.addEventListener("click", function () {
        ul.removeChild(li)
        tasklist = tasklist.filter(task => task !== text)
        localStorage.setItem("tasks", JSON.stringify(tasklist))
    })
    li.appendChild(button)
}

form.addEventListener("submit", function (e) {
    e.preventDefault()
    tasklist.push(input.value)
    localStorage.setItem("tasks", JSON.stringify(tasklist))
    newTask(input.value)
    input.value = ""
})

tasklist.forEach(task => { newTask(task) })

buttonClear.onclick = () => {
    ul.removeChild
    tasklist = tasklist.filter(task => task !== text)
    localStorage.setItem("tasks", JSON.stringify(tasklist))
}
