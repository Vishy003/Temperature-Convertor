window.addEventListener('DOMContentLoaded', ()=>{
    const celciusInput = document.getElementById("iCelcius")
    const fahrenheitInput = document.getElementById("iFahrenheit")
    const kelvinInput = document.getElementById("iKelvin")
    const clearAllBtn = document.querySelector('.button button')
    function roundNumber(number){
        return Math.round(number*100)/100
    }
    if(celciusInput) {
    celciusInput.addEventListener('input',function(){
        const cTemp = parseFloat(celciusInput.value)
        const fTemp = (cTemp*(9/5)) + 32
        const kTemp = cTemp + 273.15
        fahrenheitInput.value = roundNumber(fTemp)
        kelvinInput.value = roundNumber(kTemp)
    })}
    if(fahrenheitInput) {
    fahrenheitInput.addEventListener('input',function(){
        const fTemp = parseFloat(fahrenheitInput.value)
        const cTemp = (fTemp-32) * (5/9)
        const kTemp = (fTemp-32) * (5/9) + 273.15
        celciusInput.value = roundNumber(cTemp)
        kelvinInput.value = roundNumber(kTemp)
    })}
    if(kelvinInput) {
    kelvinInput.addEventListener('input',function(){
        const kTemp = parseFloat(kelvinInput.value)
        const cTemp = kTemp-273.15
        const fTemp = (kTemp-273.15) * (9/5)+32
        celciusInput.value = roundNumber(cTemp)
        fahrenheitInput.value = roundNumber(fTemp)
    })}
    
    if(clearAllBtn) {
    clearAllBtn.addEventListener('click',()=>
    {
        celciusInput.value = ""
        fahrenheitInput.value = ""
        kelvinInput.value = ""
    })}
})
