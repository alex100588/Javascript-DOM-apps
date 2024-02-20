const apiKey = '65b821c27fc70bc6a99650bbd9a1c53e';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('weather-icon')



// function to check the weather in city using the api
async function checkWeather(city){
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
	// shows an error message if the city input is invalid
	if(response.status == 404){
		document.querySelector('.error').style.display = 'block';
		document.querySelector('.weather').style.display = 'none';
	} else {
		let data = await response.json();
		console.log(data);
		
		document.querySelector('.city').innerHTML = data.name;
		const temp = document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
	document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
	document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';
	
	
	if(data.weather.main == 'Clouds'){
		weatherIcon.src = 'Images/clouds.png';
	}
	else if(data.weather.main == 'Clear'){
		weatherIcon.src = 'Images/clear.png';
	}
	else if(data.weather.main == 'Rain'){
		weatherIcon.src = 'Images/rain.png';
	}
	else if(data.weather.main == 'Drizzle'){
		weatherIcon.src = 'Images/drizzle.png';
	}
	else if(data.weather.main == 'Snow'){
		weatherIcon.src = 'Images/snow.png';
	}
	else if(data.weather.main == 'Mist'){
		weatherIcon.src = 'Images/mist.png';
	}
	
	document.querySelector('.weather').style.display = 'block';
	
	}
}


searchBtn.addEventListener('click', ()=>{
	checkWeather(searchBox.value);
	searchBox.value = '';
})
