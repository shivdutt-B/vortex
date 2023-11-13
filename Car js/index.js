function makeVisible() {
    const cars = document.querySelector('.featured-car-carousel').children
    const carCompanies = document.querySelectorAll('.car-company-list li')
    for (car of carCompanies) {
        if (this == car){
            this.style.backgroundColor = 'var(--theme-color)'
        }
        else{
            car.style.backgroundColor = 'transparent'
        }
    }
    for (let car of cars) {
        if (this.getAttribute('data-car-company') == 'all-cars') {
            car.style.display = 'inline-block';
        }
        else if (this.getAttribute('data-car-company') == car.getAttribute('data-car-company')) {
            document.querySelector('.featured-car-carousel')
            car.style.display = 'inline-block';
        }
        else {
            car.style.display = 'none';
        }
    }
}


document.querySelectorAll('.car-company-list li').forEach((element) => {
    element.addEventListener('click', makeVisible);
})

function mobileNavView() {
    document.querySelector('#ham-logo').classList.toggle('ham-nav-visible')
    document.querySelector('#cross-logo').classList.toggle('ham-nav-visible')
    document.querySelector('.nav-links').classList.toggle('mobile-nav')
    
}
document.querySelectorAll('.nav-ham i').forEach((element) => {
    element.addEventListener('click', mobileNavView)
})


