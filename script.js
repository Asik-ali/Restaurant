let bar = document.querySelector(".menubar")
let menu = document.querySelector(".fa-bars")
let mark = document.querySelector(".fa-xmark")
menu.addEventListener("click",function(){
    bar.style.top = "0px"
})
mark.addEventListener("click",function(){
    bar.style.top = "-100%"

})