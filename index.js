// javascript/*
// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound
// */

let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const feet = 3.281
const gallon = 0.264
const kilogram = 2.204
const btnEl = document.getElementById("btn-el")

btnEl.addEventListener("click", function(){
    let userInp = Number(inputEl.value)
    function length() {
        const feetResult = (userInp * feet).toFixed(3)
        const meterResults = (userInp/feet).toFixed(3)
        lengthEl.textContent = `${userInp} meters = ${feetResult} feet | ${userInp} feet = ${meterResults} meters`
    }
    
    length()
    
    function volume() {
        const gallonResults = (userInp * gallon).toFixed(3) + " gallons "
        const literResults = (userInp/gallon).toFixed(3) + " liters "
        volumeEl.textContent = `${userInp} liters = ${gallonResults} | ${userInp} gallons = ${literResults} `
    }
    
    volume()
    
    function mass() {
        const poundsResults = (userInp * kilogram).toFixed(3) + " pounds "
        const kiloResults =  (userInp/kilogram).toFixed(3) + " kilos "
        massEl.textContent = `${userInp} kilos = ${poundsResults} | ${userInp} pounds = ${kiloResults} `
    }
    
    mass()
})