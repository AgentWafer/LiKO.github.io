let theme = JSON.parse(localStorage.getItem("theme"))
const themeButton = document.querySelector(".change-theme-button")

const body = document.querySelector("body")
const header = document.querySelector("header")
const footer = document.querySelector("footer")

const text = document.querySelectorAll(".text")
const section = document.querySelectorAll("section")

if (theme == null) theme = true
applyTheme(theme)
themeButton.onclick = changeTheme

function changeTheme () {
    theme = !theme
    applyTheme(theme)

    console.log(theme)
    localStorage.setItem("theme", JSON.stringify(theme))
}

function applyTheme (mode) {
    if (mode) {
        header.style.backgroundColor = "#353034"
        footer.style.backgroundColor = "#353034"
    }
    else {
        header.style.backgroundColor = "#fafffa"
        footer.style.backgroundColor = "#fafffa"
    }
    text.forEach(element => {
        element.style.color = (mode) ? "#fafffa" : "#353034"
    })
    section.forEach(element => {
        if (mode) {
            element.style.backgroundColor = "#353034"
            element.style.borderColor = "#353034"
        }
        else {
            element.style.backgroundColor = "#fafffa"
            element.style.borderColor = "#fafffa"
        }
    })
    body.style.backgroundImage = (mode) ? "linear-gradient(20deg, #63127e 0%, #203698 100%)" : "linear-gradient(20deg, #3eecb2 0%, #EE74E1 100%)"
}
