let dice = document.querySelector('.dice')
let header = document.querySelector('.header')
let advice = document.querySelector('.advice')

dice.addEventListener('click',()=>{
    getNewAdvice()
})
getNewAdvice()


async function getNewAdvice(){
    let response = await fetch('https://api.adviceslip.com/advice')
    let data = await response.json()
    console.log(data)
    header.textContent = 'Advice #' + data.slip.id 
    advice.textContent = data.slip.advice
}