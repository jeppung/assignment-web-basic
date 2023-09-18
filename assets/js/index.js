

let hamburgerMenu = document.getElementById("hamburger-menu")
let navMenu = document.getElementById("nav-menu")
hamburgerMenu.addEventListener("click",(e) => {
    e.preventDefault()

    if(navMenu.classList.contains("hidden")){
        navMenu.classList.remove("hidden")
    }else{
        navMenu.classList.add("hidden")
    }
})