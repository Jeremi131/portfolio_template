// ---------------------------- LOAD SCREEN -----------------------
window.addEventListener("load", function() {
    const load = document.querySelector(".load")

    setTimeout( function(){
        load.style.display = "none"
    }, 3000);

})


// ------------------------------- T O O G L E  D A R K  M O D E -------------------------------------

const ball =  document.querySelector(".ball");


ball.addEventListener('click', function(){
ball.classList.toggle("ball_active");
document.body.classList.toggle("darkmode");
});


//------------------------------ MENU ------------------------------------

const iconMenu = document.querySelector("#color");
const icon = document.querySelector("#menu");
const menu = document.querySelector("#menu_nav");
const closedHome = document.querySelector("#closed_home")
const closedExperience = document.querySelector("#closed_experience")
const closedBriefcase = document.querySelector("#closed_briefcase")
const closedContact = document.querySelector("#closed_contact")



iconMenu.addEventListener('click', function () {
    if (menu.className == "menu_nav") {
        menu.className = "menu_show";
    } else {
        menu.className = "menu_nav";
    }

    if (icon.className == "icon_menu") {
        icon.className = "change-color";
    } else { 
        icon.className = "icon_menu";
    }
});

closedHome.addEventListener('click', function () {
    if (menu.className == "menu_show") {
        menu.className = "menu_nav";
    } 

    if (icon.className == "change-color") {
        icon.className = "icon_menu";
    }
})

closedExperience.addEventListener('click', function () {
    if (menu.className == "menu_show") {
        menu.className = "menu_nav";
    } 

    if (icon.className == "change-color") {
        icon.className = "icon_menu";
    }
})

closedBriefcase.addEventListener('click', function () {
    if (menu.className == "menu_show") {
        menu.className = "menu_nav";
    } 

    if (icon.className == "change-color") {
        icon.className = "icon_menu";
    }
})

closedContact.addEventListener('click', function () {
    if (menu.className == "menu_show") {
        menu.className = "menu_nav";
    } 

    if (icon.className == "change-color") {
        icon.className = "icon_menu";
    }
})

