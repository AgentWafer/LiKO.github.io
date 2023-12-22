let arr = ["ghoul.png", "map.png", "kj.png", "ph.png"]
let slider = document.querySelector(".slider"), i = 0
slider.onclick = funcB
function funcB() {
    slider.style.backgroundImage = "url(../images/" + arr[i] + ")"
    i == arr.length - 1 ? i = 0 : i++
}