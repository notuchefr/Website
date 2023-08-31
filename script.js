
//beds
let bedsContainer = document.querySelector('.beds-container')
let bedsDownArrow = document.querySelector('.beds-down-arrow')



bedsDownArrow.addEventListener('click', function clickFunction() {
    console.log(Array.from(bedsContainer.classList).includes('beds-container'))
    if(Array.from(bedsContainer.classList).includes('show')) {
        bedsContainer.classList.remove('show')
    }else { 
        bedsContainer.classList.add('show')
    }
})

//mirrors
let mirrorsContainer = document.querySelector('.mirrors-container')
let mirrorsDownArrow = document.querySelector('.mirros-down-arrow')


mirrorsDownArrow.addEventListener('click', function clickFunction() {
    if(Array.from(mirrorsContainer.classList).includes('show')) {
        mirrorsContainer.classList.remove('show')
    }else { 
        mirrorsContainer.classList.add('show')
    }
})
//lights
let lightsContainer = document.querySelector('.lights-container')
let lightsDownArrow = document.querySelector('.lights-down-arrow')


lightsDownArrow.addEventListener('click', function clickFunction() {
    if(Array.from(lightsContainer.classList).includes('show')) {
        lightsContainer.classList.remove('show')
    }else { 
        lightsContainer.classList.add('show')
    }
})

//wardrobe
let wardrobeContainer = document.querySelector('.wardrobe-container')
let wardrobeDownArrow = document.querySelector('.wardrobe-down-arrow')


wardrobeDownArrow.addEventListener('click', function clickFunction() {
    if(Array.from(wardrobContainer.classList).includes('show')) {
        wardrobeContainer.classList.remove('show')
    }else { 
        wardrobeContainer.classList.add('show')
    }
})
