import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// on load
// fetch all dogs
// render and append all dog cards to the container

//why are we calling this window?
window.addEventListener('load', async() => {

    const Dogs = await getDogs();

    for (let dog of Dogs) {
        const dogEl = renderDogCard(dog);

        dogListContainer.append(dogEl);
        
    }

});