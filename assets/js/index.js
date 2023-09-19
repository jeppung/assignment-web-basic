

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

let all = document.getElementById("all")
let webDesign = document.getElementById("web-design")
let mobileApp = document.getElementById("mobile-app")
let uiDesign = document.getElementById("ui-design")
let portofolioData = document.getElementById("portofolio-data")
let photosIndex = [0,1,2,3,4,5,6,7,8]

function showAllImage() {
    for(let i=0;i<portofolioData.children.length;i++) {
        portofolioData.children.item(i).classList.remove("hidden")
    }
}

all.addEventListener("click", (e) => {
    e.preventDefault()
    showAllImage()
})

webDesign.addEventListener("click", (e) => {
    e.preventDefault()
    showAllImage()
    for(let i=0;i<portofolioData.children.length;i++) {
        if (i == 1 || i == 2 || i == 7) continue
        portofolioData.children.item(i).classList.add("hidden")
    }
})

mobileApp.addEventListener("click", (e) => {
    e.preventDefault()
    showAllImage()
    for(let i=0;i<portofolioData.children.length;i++) {
        if (i == 0 || i == 3) continue
        portofolioData.children.item(i).classList.add("hidden")
    }
})

uiDesign.addEventListener("click", (e) => {
    e.preventDefault()
    showAllImage()
    for(let i=0;i<portofolioData.children.length;i++) {
        if (i == 4 || i == 5 || i == 6) continue
        portofolioData.children.item(i).classList.add("hidden")
    }
})