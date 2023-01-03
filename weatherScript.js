let weather = {

            "apiKey": "36c47b981b26fc0f0152d28fc3507d4c",
            fetchWeather: function(){
                fetch("https://api.openweathermap.org/data/2.5/weather?q=Manila,ph&units=metric&appid=36c47b981b26fc0f0152d28fc3507d4c").then((response) => response.json())
                .then((data) => this.displayWeather(data) );
                },
                displayWeather: function(data){
                    const { name } = data;
                    const { icon, description } = data.weather[0];
                    const { country } = data.sys;
                    const { temp } = data.main;
                    document.querySelector(".weaTemp").innerText = temp+"°";
                    document.querySelector(".weaLoc").innerText = name+", "+country;
                    document.getElementById("wicon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
                    
                }

}

weather.fetchWeather("Manila");