let btnScroll = document.getElementById("btnScroll")

window.onscroll = function () {
    window.scrollY >= "1000" ?
        btnScroll.classList.add("show") :
        btnScroll.classList.remove("show")
}

btnScroll.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}