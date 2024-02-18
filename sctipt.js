

function showOrHide(){
    document.querySelector(".left-side").style="width:8%;"
    document.querySelector(".right-side").style="width:92%;"
   const text= document.querySelectorAll(".text")
   const budge = document.querySelectorAll(".budge")
   const listNav = document.querySelectorAll(".nav-list")
   text.forEach((items)=>{
       items.classList.add("hide")
   })
   budge.forEach((items)=>{
        items.classList.add("hide")
   })
   listNav.forEach((items)=>{
        items.classList.add("just-icon")
   })
}

