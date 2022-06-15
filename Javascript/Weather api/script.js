let timeEl = document.getElementById('time');
let currentWeatherItemsEl = document.getElementById('current-weather-items');
let timezone = document.getElementById('time-zone');
let countryEl = document.getElementById('country');
let weatherForecastEl = document.getElementById('weather-forecast');
let currentTempEl = document.getElementById('current-temp');


const API_KEY ='df37db9444c2044aa6c1fd199f9b75ac';


getWeatherData()
function getWeatherData () {
    
        let latitude=43.856430;
        let longitude=18.413029
        

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

        showWeatherData(data);
        

    })
}

function showWeatherData (data){
    timezone.innerHTML = data.timezone;
   

    let otherDayForcast = ''
    
    for(i=0;i<data.daily.length;i++){
        var day=data.daily[i];
        if(i===0){
            currentTempEl.innerHTML = `
            <img src="http://openweathermap.org/img/wn//${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
            <div class="other">
                <div class="day">${window.moment(day.dt*1000).format('dddd')}</div>
                <div class="temp">Night - ${day.temp.night}&#176;C</div>
                <div class="temp">Day - ${day.temp.day}&#176;C</div>
            </div>
            
            `
        }else{
            otherDayForcast += `
            <div class="weather-forecast-item">
                <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
                <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
                <div class="temp">Night - ${day.temp.night}&#176;C</div>
                <div class="temp">Day - ${day.temp.day}&#176;C</div>
            </div>
            
            `
        }
    }


    weatherForecastEl.innerHTML = otherDayForcast;
}