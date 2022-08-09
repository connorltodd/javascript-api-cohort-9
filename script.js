// Pseudocode
let characterList = [];

// a function which calls the rick and morty api from button click
function fetchCharacters () {
    // api calls are asynchronous
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
        // the api will update the characterlist array
        characterList = data.results
        displayCharacters()
    });
}


// the api will call displayCharacters function
function displayCharacters () {
    console.log('display characters')
    console.log('character List', characterList)
    const characterListDiv = document.getElementById('characters-list');
    for(let i = 0; i < characterList.length; i++) {
        const characterCard = document.createElement('div');
        characterCard.innerHTML = `
            <div>
                <h1>${characterList[i].name}</h1>
                <img src=${characterList[i].image} />
            </div>
        `
        characterListDiv.appendChild(characterCard)
    }
    // the displayCharacters function will create a card 
    // and append it to the characters list div
}


