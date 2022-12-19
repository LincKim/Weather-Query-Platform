document.addEventListener('DOMContentLoaded', () => {
const cityName = document.getElementById('city_here').value = 'Nairobi'
const apiKey = '7568ec61778dabefba67c1091ef20629'
const fetchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
   
    function removeElement() {
        document.getElementById('div1').remove()
    }
    const loginButton = document.getElementById('login-click')
    loginButton.addEventListener('click', () => {
        removeElement()})

    function showWeather(data){
        const nameOfCity = data.name
        const descript = data.weather[0].description
        const temp = data.main.temp
        const humid = data.main.humidity
        const windSpeed = data.wind.speed
        const pressure = data.main.pressure
        console.log(nameOfCity, descript, temp, humid, windSpeed, pressure)

        document.querySelector('.city').textContent = nameOfCity
        document.querySelector('.temp').textContent = temp + '°C'
        document.querySelector('.description').textContent = descript
        document.querySelector('.pressure').textContent = 'Air pressure: ' + pressure
        document.querySelector('.wind').textContent = 'Wind speed: ' + windSpeed + 'km/h'
        document.querySelector('.humidity').textContent = 'Humidity: '+ humid + '%'

    }
    async function fetchWeather(){
        await fetch(fetchUrl)
        .then(res => res.json())
        .then((data) => showWeather(data))
        }
    document.querySelector('.search_button').addEventListener('click', () => fetchWeather())

    document.getElementById('city_here').addEventListener('keypress', (event) => {
        if (event.key == 'Enter') {
            fetchWeather()
        }
    })
    fetchWeather('Nairobi') // this displays by default as the user is typing their request
    
})
