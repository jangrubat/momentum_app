
 getWeather();

function getWeather(){
    const api = "https://api.openweathermap.org/data/2.5/weather?q=Manila,ph&units=metric&appid=36c47b981b26fc0f0152d28fc3507d4c";

    const wicon = document.getElementById('wicon');
    const weaTemp = document.getElementById('weatTemp');
    const wLoc = document.getElementById('wLoc');


    fetch(api)
    .then((res) => res.json())
    .then((data) => {
  
        let name = data;
        let icon = data.weather;

        wLoc.innerText = name;
       wicon.src = 
        "https://openweathermap.org/img/wn/" + icon + ".png";
      

    });
  
  }

 
