AOS.init({
    duration: 1300,
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