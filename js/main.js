// Application will fetch data from the Advice Slip API
// User will enter in a single word topic
//On submit, user will view advice based on topic


// Create Variables for DOM Elements

const query = document.querySelector('.input-box').value
const button = document.querySelector('button')
const textPlace = document.querySelector('.advice-text')


button.addEventListener('click', () => {
    getFetch()
       .then(data => {
           textPlace.textContent = data.slips[1].advice
           console.log(data.slips[1].advice)
       })
       .catch(err => "Advice not found " + err)
    })


const getFetch = async () => {
 
const response = await fetch(`https://api.adviceslip.com/advice/search/love`)
const data = await response.json()
return data

}

