const fetchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
const cityName = 'Nairobi'
const apiKey = '7568ec61778dabefba67c1091ef20629'

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
        .then((data) => console.log(data))
        }

})
