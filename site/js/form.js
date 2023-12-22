const choice = document.getElementsByName("choice")
const choiceI = document.getElementsByName("choiceI")
const form = document.getElementById("form")

function yes () {
    choice.forEach(element => {
        element.hidden = true
    })
    choiceI.forEach(element => {
        element.value = ""
    })
    document.getElementById("noneB").checked = true
}

document.getElementById("noneB").onchange = yes
document.getElementById("clear").onclick = yes

document.getElementById("meetB").onchange = () => {
    choice.forEach(element => {
        element.hidden = (element.id == "meet") ?  false : true
    })
}

document.getElementById("telB").onchange = () => {
    choice.forEach(element => {
        element.hidden = (element.id == "tel") ?  false : true
    })
}

document.getElementById("emailB").onchange = () => {
    choice.forEach(element => {
        element.hidden = (element.id == "email") ?  false : true
    })
}

document.getElementById("otherB").onchange = () => {
    choice.forEach(element => {
        element.hidden = (element.id == "other") ?  false : true
    })
}

form.onsubmit = function (event) {
    event.preventDefault()

    if (!document.getElementById("meet").hidden & document.getElementById("meetI").value == ""){
        alert("Выберите дату")
    }
    else if (!document.getElementById("tel").hidden & !document.getElementById("telI").value.match(/\+\d+/)){
        alert("Введите корректный номер телефона")
    }
    else if (!document.getElementById("email").hidden & !document.getElementById("emailI").value.match(/\w+@[a-zA-Z]+\.[a-zA-Z]+/)){
        alert("Введите корректный Email")
    }
    else if (!document.getElementById("other").hidden & document.getElementById("otherI").value == ""){
        alert("Введите ссылку")
    }

    else location.reload()
}