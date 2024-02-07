AOS.init({
    duration: 1300 ,
 })


function switchVisible(){
    if (document.getElementById("one")){
        if(document.getElementById("one").style.display=="none"){
            document.getElementById("one").style.display="block"
            document.getElementById("two").style.display="none"

        }
        else{
            document.getElementById('one').style.display='none'
            document.getElementById('two').style.display='block'
        }
    }
}
const audio = new Audio("https://free-sound-effects.net/mp3/01/free-sound-effects-AU2B79A6.mp3")
const but = document.querySelectorAll(".circle");
but.forEach(button => {
    button.addEventListener("click", ()=>{
        audio.play();
    })
})


var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide(){

  if(index<0){
    index = slides.length-1;
  }
  
  if(index>slides.length-1){
    index = 0;
  }
  
  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
    dot[i].classList.remove("active");
  }
  
  slides[index].style.display= "block";
  dot[index].classList.add("active");
  
  index++;
  
  setTimeout(changeSlide,2000);
  
}

changeSlide();
// start Login
const userName2 = document.getElementById("UserName2")
const paasword2 = document.getElementById("password2")
const userName = document.getElementById("UserName")
const paasword = document.getElementById("password")
const Rpaasword = document.getElementById("r-password")
const errors = document.getElementById("error")
function sub() {
  if(paasword2.value.length === 0 && userName2.value.length === 0  ){
      errors.textContent = "password & userName none"
  }else if(userName2.value.length < 8){
    errors.textContent = "userName"
  }else if(paasword2.value.length < 8){
    errors.textContent = "password"
  }else if(Rpaasword.value.length < 8){
    errors.textContent = "rpassword"
  }else{
    localStorage.setItem("user" , userName2.value)
    localStorage.setItem("password" , paasword2.value)
    window.location.href = "./Login.html"
    errors.textContent = ""
  }

}
function submit(){
 if(localStorage.getItem){
  window.location.href = "./index.html"
 }
 else{
  document.body.innerHTML = `<p style= " color = red ; ">password and userName not find</p>`
 }
}