const inputEl = document.querySelector("#input-el")
const lenConvertEl = document.querySelector("#len-convert-el")
const volConvertEl = document.querySelector("#vol-convert-el")
const massConvertEl = document.querySelector("#mass-convert-el")

// store the input entered by the user 



function convert(){
    displayLengthConversion((Number)(inputEl.value))
    displayVolumeConversion((Number)(inputEl.value))
    displayMassConversion((Number)(inputEl.value))
}

// Convert all values and reduce the result length to 3 decimal places

function convertFeetToMeter(feet){
    let meter = (1/3.281) * (feet)
    return meter.toFixed(3)
}

function convertMeterToFeet(meter){
    let feet = (3.281 * meter)
    return feet.toFixed(3)
}

function convertGallonToLiter(gallon){
    let liter = (1/0.264) * gallon
    return liter.toFixed(3)
}

function convertLiterToGallon(liter){
    let gallon = (0.264 * liter)
    return gallon.toFixed(3)
}

function convertPoundToKilogram(pound){
    let kilogram = (1/2.204) * pound
    return kilogram.toFixed(3)
}

function convertKilogramToPound(kilogram){
    let pound = (2.204 * kilogram)
    return pound.toFixed(3)
}

// display all converted values to window

function display(element, value){
    element.textContent = value
}

// display length conversions

function displayLengthConversion(length){
    let feet = convertMeterToFeet(length)
    let meter = convertFeetToMeter(length)

    let outputStr = `${length} meters = ${feet} feet | ${length} feet = ${meter} meters`
    display(lenConvertEl, outputStr)
}


// display volume conversions
function displayVolumeConversion(volume){
    let liter = convertGallonToLiter(volume)
    let gallon = convertLiterToGallon(volume)

    let outputStr = `${volume} liters = ${gallon} gallons | ${volume} gallons = ${liter} liters`
    display(volConvertEl, outputStr)
}

function displayMassConversion(mass){
    let kilo = convertPoundToKilogram(mass)
    let pound = convertKilogramToPound(mass)

    let outputStr = `${mass} kilos = ${pound} pounds | ${mass} pounds = ${kilo} kilos`
    display(massConvertEl, outputStr)
}
