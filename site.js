function onPageLoad () {
    const button = document.querySelector('#nav-button')
    const nav = document.querySelector('.main-navigation')
    button.addEventListener('click', function () {
        console.log('click')
        if(nav.classList.contains('open')) {
            nav.classList.remove('open')
        }
        else {
            nav.classList.add('open')
        }
    })
}

window.addEventListener('load', onPageLoad )