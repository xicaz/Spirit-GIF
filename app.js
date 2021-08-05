const DOMAIN = 'http://api.giphy.com/v1/stickers/search'
const API_KEY = 'evsVx9tZ3CipCmZgREMZqaCdKPGn4beP'
const NAME = document.querySelector(`#name`);
const BASE_URL = `${DOMAIN}?api_key=${API_KEY}&q=`;
const button = document.querySelector("#search")
// const AN_URL = `${DOMAIN}?api_key=${API_KEY}&q=${animalName}`


// Adding 




function showAnimal(animalName) {

  let firstAnimal = animalName[0];



  console.log(firstAnimal)
  let animalElement =
    `
      <img src="${firstAnimal.images.downsized_medium.url}"/>
    `
    document.querySelector('#animal-container').insertAdjacentHTML('beforeend', animalElement) 

}
 



function showGifData(gifs) {
  gifs.forEach((gif, index) => {

  //append gif to container

    
    let gifElements = `
    <div id="gif-${index}" class="gif-block">
      <img class="gif" src="${gif.images.downsized_medium.url}">

    </div>
    `
    document.querySelector('#gif-container').insertAdjacentHTML('beforeend', gifElements)
    
  });
   
}




async function getGif() {

  let inputName = NAME.value

  const nameFirstLetter = inputName[0]
  
  let animalName = "";
  
  let letters = "abcdefghijklmnopqrstuvwxyz"
  
  let animals = ["Alligator", "Bear", "Cat", "Dragon", "Elephant", "Frog", "Goat", "Horse", "Iguana", "Jaguar", "Kangeroo", "Lion", "Monkey", "Narwhal", "Otter", "Penguin", "Quail", "Rabbit", "Snake", "Tiger", "Unagi", "Vulture", "Wolf", "Axolotl", "Yak", "Zebra"]
  
  let nameFirstLetterIndex = letters.indexOf(nameFirstLetter)
  animalName = animals[nameFirstLetterIndex]


    let gifContainer = document.querySelector('#gif-container')
  gifContainer.innerHTML = ""
  let animalContainer = document.querySelector('#animal-container')
  animalContainer.innerHTML = ""

  const response = await axios.get(`${BASE_URL}${NAME.value}`)
  const responseAnimal = await axios.get(`${BASE_URL}${animalName}`)

  
   console.log(responseAnimal)
  showAnimal(responseAnimal.data.data)
  showGifData(response.data.data)

  // functionName(response.data.data) to grab the animals and append 
}


button.addEventListener('click', getGif)





 

