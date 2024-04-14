function hide(id, btn) {
    element = document.getElementById(id)
    button = document.getElementById(btn)
    if (element.hasAttribute("hidden")) {
        button.textContent = "-"
        element.removeAttribute("hidden")
    } else {
        button.textContent = "+"
        element.setAttribute("hidden", id)
    }
}