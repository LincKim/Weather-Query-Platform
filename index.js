const cityName = 'Nairobi'
const apiKey = '7568ec61778dabefba67c1091ef20629'
const fetchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`

document.addEventListener('DOMContentLoaded', () => {
    function removeElement() {
        document.getElementById('div1').remove()
    }
    const loginButton = document.getElementById('login-click')
    loginButton.addEventListener('click', () => {
        removeElement()})


    async function fetchWeather(){
        await fetch(fetchUrl)
        .then(res => res.json())
        .then((data) => showWeather(data))
        }
    fetchWeather()

    function showWeather(data){
        const nameOfCity = data.name
        const descript = data.weather[0].description
        const temp = data.main.temp
        const humid = data.main.humidity
        const windSpeed = data.wind.speed
        const pressure = data.main.pressure
        console.log(nameOfCity, descript, temp, humid, windSpeed, pressure);

    }
})
