document.addEventListener('DOMContentLoaded', () => {
    function displ() {
    let hiddenContents = document.getElementByClassName('container')
    let hideLogin = document.getElementByClassName('login_box')

        if (hiddenContents.style.display === 'none' && hideLogin.style.display === 'block') {
        hiddenContents.style.display = 'block', hideLogin.style.display = 'none'
        }else {
            hiddenContents.style.display === 'none'
        }
}
    document.getElementById('login-click').addEventListener('submit', () => displ())
})
