let btnScroll = document.getElementById("btnScroll")

window.onscroll = function () {
    if (window.scrollY >= 1000) {
        btnScroll.style.display = "block"
    } else {
        btnScroll.style.display = "none"
    }
}

btnScroll.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}