/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const btnEl = document.getElementById("btn")
const input = document.getElementById("inp")
const lenEl = document.getElementById("len-el")
const volEl = document.getElementById("vol-el")
const masEl = document.getElementById("mas-el")
btnEl.addEventListener("click",function(){
    if(input.value==false){
        lenEl.textContent = "Please Enter Input"
        volEl.textContent = "Please Enter Input"
        masEl.textContent = "Please Enter Input"
    }
    else{
        let num = input.value
        lenEl.textContent = `${num} meters = ${(num*3.281).toFixed(2)} feet | 
                            ${num} feet = ${(num/3.281).toFixed(2)} meters`
        volEl.textContent = `${num} liters = ${(num*0.264).toFixed(2)} gallons |
                             ${num} gallons = ${(num/0.264).toFixed(2)} liters`
        masEl.textContent = `${num} kilos = ${(num*2.204).toFixed(2)} pounds |
                             ${num} pounds = ${(num/2.204).toFixed(2)} kilos`
    }
})
