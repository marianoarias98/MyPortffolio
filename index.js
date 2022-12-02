const menu = document.querySelector(".menu-icon")
const closeIcon = document.querySelector(".close-icon")
const navItems = document.querySelectorAll(".nav-item")
const $form = document.querySelector("#form")
const questionHead = document.querySelectorAll(".question-card-head")

function showHideMenu() {
    const itemsContainer = document.querySelector(".nav-items").classList.toggle("nav-items-active")
    closeIcon.classList.toggle("close-icon-active")
}

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            "Accept": `application/json`
        }
    })
    if (response.ok){
        this.reset()
        alert("Gracias por contactarme, me estaré comunicando muy pronto")
    }
}


menu.addEventListener("click", showHideMenu)
closeIcon.addEventListener("click", showHideMenu)
navItems.forEach(item => {
    if (innerWidth < 700) item.addEventListener("click", showHideMenu)
})

$form.addEventListener("submit", handleSubmit)

questionHead.forEach(item =>{
    item.addEventListener("click", function (){
        item.nextElementSibling.classList.toggle("show")
    })
})