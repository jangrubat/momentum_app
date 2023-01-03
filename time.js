
todayIs();

function todayIs(){
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  let today = new Date().toLocaleDateString()

  const d = new Date();
  let day = weekday[d.getDay()];
  
  const dayOfWeek = document.querySelector(".dateToday");
  dayOfWeek.innerText = day+", "+today;
}

showTime();

function showTime(){

      let on24 =  document.querySelector('.time');
      if (on24.classList.contains('.show24')) {
        on24.classList.remove('.show12');
         hour24();
        
        }
        else{
          hour12();  
        }

        // else{
        //   const time = document.querySelector(".timeNow .time");
        //   time.innerText = "not working";
        // }

}


// 24hours
hour24();
function hour24(){

setInterval(()=>{
  const time24 = document.querySelector(".time24");
  // time24.innerText= "Hello"
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();

if(minutes < 10){
  minutes = "0" + minutes;
}


//GREET BASE ON TIME 
const greeting = document.getElementById('greeting');

const welcomeTypes = ['Good Morning,&nbsp', 'Good Afternoon,&nbsp', 'Good Evening,&nbsp'];
let time12 = date.getHours();

let welcomeText = '';

if (time12 < 11) {
  welcomeText = welcomeTypes[0]; 
  greeting.innerHTML = welcomeText;

}

  else if (time12 < 18){ 
    welcomeText = welcomeTypes[1];
    greeting.innerHTML = welcomeText;
  }
  else {
    welcomeText = welcomeTypes[2];
    greeting.innerHTML = welcomeText;
  }

  time24.textContent = hours + ":" + minutes;
});
}


// 12hours
function hour12(){



setInterval(()=>{
    const time = document.querySelector(".timeNow .time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let day_night = "AM";

    let hour24count = date.getHours();

      if(hour24count > 11){
        day_night = "PM";
      }

    if(hours > 12){
     
      hours = hours - 12;
    }

    if(hours == 0){
      hours =  12;
    }

  if(minutes < 10){
    minutes = "0" + minutes;
  }


  //GREET BASE ON TIME 
  const greeting = document.getElementById('greeting');
  
  const welcomeTypes = ['Good Morning,&nbsp', 'Good Afternoon,&nbsp', 'Good Evening,&nbsp'];
  let time12 = date.getHours();

  let welcomeText = '';

  if (time12 < 11) {
    welcomeText = welcomeTypes[0]; 
    greeting.innerHTML = welcomeText;

  }

    else if (time12 < 18){ 
      welcomeText = welcomeTypes[1];
      greeting.innerHTML = welcomeText;
    }
    else {
      welcomeText = welcomeTypes[2];
      greeting.innerHTML = welcomeText;
    }

    time.textContent = hours + ":" + minutes + " "+ day_night;
  });
}