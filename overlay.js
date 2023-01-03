
const overlay = document.querySelector(".overlay");
const overlayInput = document.querySelector(".overLayInput");

const topBanner = document.querySelector(".topBanner");
const dateToday = document.querySelector(".dateToday");
const timeNow = document.querySelector(".timeNow");
const greetName = document.querySelector(".greetName");
const focusContainer = document.querySelector(".focus-container");
const todoContainer = document.querySelector(".todo-container");
const bottomBanner = document.querySelector(".bottomBanner");
let local = localStorage;

// FUNCTION >> Check kung may laman na UserName yung LocalStorage
document.addEventListener('DOMContentLoaded',getUserName);//Nagchecheck pag nag reaload ka

let userText = JSON.parse(local.getItem('allNames'));
  const nameThisUser = document.getElementById('nameslist');
  nameThisUser.innerHTML= userText +".";



//For the Overlay input, magtatanong ng pangalan at ano gagawin doon sa input na nilagay
overlayInput.addEventListener('keyup', (e) => {
    var names = document.querySelector(".overLayInput").value;
    
  
    if(e.key === 'Enter') {
        if(names != ""){
  
          local.setItem("allNames", JSON.stringify(names));
          let userText = JSON.parse(local.getItem('allNames'));
          const nameThisUser = document.getElementById('nameslist');
          nameThisUser.innerText= userText;
  
            overlay.classList.add("hidden");
            overlay.classList.remove("active");
            overlay.style.display = 'none';
            topBanner.classList.add("active");
            dateToday.classList.add("active");
            timeNow.classList.add("active");
            greetName.classList.add("active");
            focusContainer.classList.add("active");
            todoContainer.classList.add("active");
            bottomBanner.classList.add("active");
            // names.value = "";
            }else{
              alert("Name is required!");
            }
          }
  
  })


  

  






function getUserName(){
if (localStorage.getItem("allNames") === null){
    overlay.classList.add("active");
    topBanner.classList.add("hidden");
    dateToday.classList.add("hidden");
    greetName.classList.add("hidden");
    timeNow.classList.add("hidden");
    focusContainer.classList.add("hidden");
    todoContainer.classList.add("hidden");
    bottomBanner.classList.add("hidden");
    } else{
    overlay.classList.add("hidden");
    overlay.classList.remove("active");
    overlay.style.display = 'none';
    topBanner.classList.add("active");
    dateToday.classList.add("active");
    timeNow.classList.add("active");
    greetName.classList.add("active");
    focusContainer.classList.add("active");
    todoContainer.classList.add("active");
    bottomBanner.classList.add("active");
    names.value = "";
      }
}







