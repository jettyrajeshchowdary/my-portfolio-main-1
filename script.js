let icon=document.querySelector(".dropdown i");
let dm=document.getElementById("dmn");
let count=0;
icon.addEventListener("click",()=>{
    // icon.classList.add("rotate");
    count++;
     if(count%2!=0){
        icon.classList.add("rotate");
        dm.style.transition=" all 1s";
        dm.style.display="block";
        
    }
    else{
        dm.style.display="none";

    }
    
})
 var typed=new Typed(".text",{
     strings:["Web Developer","ANDROID Developer","PYTHON FULL-Stack Developer"],
     typeSpeed:100,
     backSpeed:100,
     backDelay:1000,
     loop:true
 })