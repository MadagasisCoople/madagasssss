var damn1=document.querySelector(".damn1")
var damn2=document.querySelector(".damn2")
var damn3=document.querySelector(".damn3")
var damn4=document.querySelector(".damn4")
var damn5=document.querySelector(".damn5")
var damn6=document.querySelector(".damn6")
var damn7=document.querySelector(".damn7")
var damn8=document.querySelector(".damn8")
var myaudio1=document.querySelector(".music1")
var myaudio2=document.querySelector(".music2")
var char = document.querySelector(".char")
char.style.display = "none"
damn8.addEventListener("click",damn81)
function damn81 () {
    myaudio1.play();
    setTimeout(function(){
        damn2.removeEventListener("click",den)
        damn3.removeEventListener("click",den)
        damn4.removeEventListener("click",den)
        damn5.removeEventListener("click",den)
        damn6.removeEventListener("click",den)
        damn7.removeEventListener("click",den)
        damn1.removeEventListener("click",damn11)
        char.style.display = "block"
        char.innerHTML = "From Den và Yên"
    },500)
    setTimeout(function(){
        char.style.display = "none"
        damn8.removeEventListener("click",damn81)
        damn2.addEventListener("click",den)
        damn3.addEventListener("click",den)
        damn4.addEventListener("click",den) 
        damn5.addEventListener("click",den)
        damn6.addEventListener("click",den)
        damn7.addEventListener("click",den)
        damn1.addEventListener("click",damn11)
    },8500)
}
damn1.addEventListener("click",damn11)
function damn11 () {
    damn2.removeEventListener("click",den)
    damn3.removeEventListener("click",den)
    damn4.removeEventListener("click",den)
    damn5.removeEventListener("click",den)
    damn6.removeEventListener("click",den)
    damn7.removeEventListener("click",den)
    damn8.removeEventListener("click",damn81)
    myaudio2.play();
    setTimeout(function(){
        char.style.display = "block"
        char.innerHTML = "From Bi"
    },500)
    setTimeout(function(){
        char.style.display = "none"
        damn2.addEventListener("click",den)
        damn3.addEventListener("click",den)
        damn4.addEventListener("click",den) 
        damn5.addEventListener("click",den)
        damn6.addEventListener("click",den)
        damn7.addEventListener("click",den)
        damn8.addEventListener("click",damn81)
        damn1.removeEventListener("click",damn11)
    },3000)
}
damn2.addEventListener("click",den)
damn3.addEventListener("click",den)
damn4.addEventListener("click",den)
damn5.addEventListener("click",den)
damn6.addEventListener("click",den)
damn7.addEventListener("click",den)
function den (){
    damn8.removeEventListener("click",damn81)
    damn1.removeEventListener("click",damn11)
    char.style.display = "block"
    char.innerHTML = "Cái này k có quà !"
    setTimeout(function(){
        char.style.display = "none"
        damn8.addEventListener("click",damn81)
        damn1.addEventListener("click",damn11)
    },2000)
}
