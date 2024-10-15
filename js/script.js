document.querySelector(".mobile-menu-btn").onclick = function (){
    document.querySelector(".header-nav").classList.remove("hidden-menu")
}

document.querySelector(".header-nav").onclick = function (){
    document.querySelector(".header-nav").classList.add("hidden-menu")
}

document.querySelector(".back").onclick = function() {
    document.querySelector(".header-nav").classList.remove("hidden-menu")
}

const scrollBtn =  document.querySelector(".scroll-to-top");
window.onscroll = function(){
    if(window.scrollY > 750){
        document.querySelector(".scroll-to-top").classList.remove("IsShowBtn")
    } else if (window.scrollY < 750){
        scrollBtn.classList.add("IsShowBtn");
    }
}

document.querySelector(".scroll-to-top").onclick = function() {
    window.scrollTo( 0, 0)
}
