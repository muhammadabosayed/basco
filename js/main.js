const close = document.querySelector(".close")
const openbtn = document.querySelector(".openbtn")
const menu = document.querySelector(".menu ul")
const up = document.querySelector(".up")

close.onclick = function (){
  close.style.opacity="0"
  close.style.transition=".5s"
  menu.classList.remove("active")
  menu.style.transition="1s"

}
openbtn.onclick = function (){
  close.style.opacity="1"
  close.style.transition="4s"
  menu.classList.add("active")
  menu.style.transition="1s"

}
window.onscroll= function(){
  if(window.scrollY >= 700){
    up.style.right="30px"
    up.style.transition="1s"
  }else{
    up.style.right="-50px"
    up.style.transition="1s"
  }
}
up.onclick= function(){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
}
