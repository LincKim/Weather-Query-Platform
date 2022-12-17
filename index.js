const fetchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
let cityName = ''
const apiKey = '7568ec61778dabefba67c1091ef20629'

document.addEventListener('DOMContentLoaded', () => {
    function removeElement() {
        document.getElementById('div1').remove()
    }
    const loginButton = document.getElementById('login-click')
    loginButton.addEventListener('click', () => {
        removeElement()})

})
