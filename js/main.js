// Application will fetch data from the Advice Slip API
// User will enter in a single word topic
//On submit, user will view advice based on topic


// Create Variables for DOM Elements

const button = document.querySelector('button')
const textPlace = document.querySelector('.advice-text')

button.addEventListener('click',() => {
    
    getFetch().catch(err => `Advice not found: ${err}`)
})


const getFetch = async () => {
   
const query = await document.querySelector('.input-box').value
const response = await fetch(`https://api.adviceslip.com/advice/search/${query}`)
const data = await response.json()
//return data
textPlace.textContent = data.slips[0].advice
console.log(data.slips[0].advice)
}
