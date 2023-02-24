const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;

const searchButton = document.querySelector('.search-btn');
const weatherDetails = document.querySelector('.weather-details');
const weatherInfo = document.querySelector('.weather-info');
const image = document.querySelector('.weather-image');

searchButton.addEventListener('click', function () {

	const cityEntered = document.querySelector('.search').value;
	
	if (cityEntered == '') {
		return;
	}


	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityEntered}&appid=${API_KEY}&units=metric`)
		.then(response => response.json())
		.then(response => {

			if (response.cod == 404) {

				if (weatherInfo.classList.contains('hide')) {
					
					weatherInfo.classList.remove('hide');
					
				} else weatherDetails.classList.add('hide');

				document.querySelector('.container').style.height = '21.5625rem';

				document.querySelector('.location').textContent = 'city not found :(';
				image.src = 'images/404.svg';
				return;

		
				

			}


			//695px

			document.querySelector('.container').style.height = '43.4375rem';

			// display data
			weatherInfo.classList.remove('hide');
			weatherDetails.classList.remove('hide');
			
			document.querySelector('.location').textContent = response.name;
			document.querySelector('.temperature').textContent = response.main.temp;
			document.querySelector('.wind').textContent = response.wind.speed;
			document.querySelector('.humidity').textContent = response.main.humidity;
			const condition = response.weather[0].main;
			document.querySelector('.condition').textContent = condition;

			
			// change image
			switch (condition) {

				case 'Clouds':
					image.src = 'images/cloudy.png';
					break;
				
				case 'Clear':
					image.src = 'images/clear.png';
					break;
				
				case 'Rain':
					image.src = 'images/rain.png';
					break;
				
				case 'Snow':
					image.src = 'images/snow.png';

					break;
				
				case 'Thunderstorm':
					image.src = 'images/storm.png';

					break;
				
				case 'Drizzle':
					image.src = 'images/rain.png';

					break;
				
				case 'Mist':
					image.src = 'images/foggy.png';

					break;
				
				case 'Haze':
					image.src = 'images/foggy.png';
					break;
				
				case 'Fog':
					image.src = 'images/foggy.png';
					break;
				
				case 'Smoke':
					image.src = 'images/foggy.png';
					break;
				
				case 'Storm':
					image.src = 'images/storm.png';

					break;
				
				default:
					image.src = 'images/partially-cloudy.png';
					break;
			}
			
		});
		
});




