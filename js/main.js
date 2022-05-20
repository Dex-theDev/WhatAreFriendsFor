// Application will fetch data from the Advice Slip API
// User will enter in a single word topic
//On submit, user will view advice based on topic


// Create Variables for DOM Elements

const button = document.querySelector('button')
const textPlace = document.querySelector('.advice-text')
const adviceBox = document.querySelector('.advice-text-box')

button.addEventListener('click',() => {
    
    getFetch().catch(err => `Advice not found: ${err}`)
})

//Hide advice box on page load
adviceBox.style.display = 'none'

const getFetch = async () => {
   
const query = await document.querySelector('.input-box').value
const response = await fetch(`https://api.adviceslip.com/advice/search/${query}`)
const data = await response.json()
//return data
    adviceBox.style.display = 'flex'
textPlace.textContent = data.slips[0].advice

console.log(data.slips[0].advice)
}
