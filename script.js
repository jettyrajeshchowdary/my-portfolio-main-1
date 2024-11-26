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

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});

