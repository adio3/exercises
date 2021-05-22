const movieUrl = 'https://swapi.dev/api/films/';

const titleList = document.querySelector('#film-titles');
const shipsList = document.querySelector('#ships-titles');
const pilotsList = document.querySelector('#pilots-titles');
const pilotsDetailList = document.querySelector('#pilot-details');
const favList = document.querySelector('#favorite-pilots-list');

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// const fetching = (url, function()) => {fetch(url)
//     .then((res) => res.json())
//     .then((data) => {function()}}

const getMovieTitles = () => {
    //adding movies *********************************************************************************
    fetch(movieUrl)
        .then(res => res.json())
        .then(data => {
            data.results.forEach(movies => {
                const newListObject = document.createElement('li'); // create listobject
                const newA = document.createElement('a');
                newA.innerText = movies.title; // append title to listobject text
                newA.href = '#';
                const att = document.createAttribute('data-url'); // Create a "data-url" attribute
                att.value = `${movies.url}`;
                newA.setAttributeNode(att);

                //adding starships *********************************************************************************

                newA.addEventListener('click', event => {
                    event.preventDefault();
                    removeAllChildNodes(shipsList);
                    removeAllChildNodes(pilotsList);
                    removeAllChildNodes(pilotsDetailList);
                    // Movie URL
                    const clickedMovieUrl = event.explicitOriginalTarget.attributes['data-url'].nodeValue;
                    // fetch movieUrl to get starshipUrls
                    fetch(clickedMovieUrl)
                        .then(res => res.json())
                        .then(movie => {
                            // for each starshipUrl fetch starship name and add to Ships list
                            movie.starships.forEach(starshipUrl => {
                                fetch(starshipUrl)
                                    .then(res => res.json())
                                    .then(starship => {
                                        const newListObject = document.createElement('li'); // create listobject
                                        const newA = document.createElement('a'); // create a object
                                        newA.innerText = starship.name; // append title to listobject text
                                        newA.href = '#';
                                        const att = document.createAttribute('data-url'); // Create a "data-url" attribute
                                        att.value = `${starship.url}`;
                                        newA.setAttributeNode(att);
                                        // adding pilots *********************************************************************************
                                        newA.addEventListener('click', event => {
                                            event.preventDefault();
                                            removeAllChildNodes(pilotsList);
                                            removeAllChildNodes(pilotsDetailList);
                                            // starship URL
                                            const clickedStarshipUrl = event.explicitOriginalTarget.attributes['data-url'].nodeValue;
                                            // fetch movieUrl to get starshipUrls
                                            fetch(clickedStarshipUrl)
                                                .then(res => res.json())
                                                .then(starship => {
                                                    // if pilots are known
                                                    if (starship.pilots.length !== 0) {
                                                        // for each starshipUrl fetch starship name and add to Ships list
                                                        starship.pilots.forEach(pilotUrl => {
                                                            fetch(pilotUrl)
                                                                .then(res => res.json())
                                                                .then(pilot => {
                                                                    const newListObject = document.createElement('li'); // create listobject
                                                                    const newA = document.createElement('a'); // create a object
                                                                    newA.innerText = pilot.name; // append title to listobject text
                                                                    newA.href = '#';
                                                                    const att = document.createAttribute('data-url'); // Create a "data-url" attribute
                                                                    att.value = `${pilot.url}`;
                                                                    newA.setAttributeNode(att);
                                                                    // adding pilots infos *********************************************************************************
                                                                    newA.addEventListener('click', event => {
                                                                        event.preventDefault();
                                                                        removeAllChildNodes(pilotsDetailList);
                                                                        // starship URL
                                                                        const clickedPilotUrl = event.explicitOriginalTarget.attributes['data-url'].nodeValue;
                                                                        // fetch movieUrl to get starshipUrls
                                                                        fetch(clickedPilotUrl)
                                                                            .then(res => res.json())
                                                                            .then(pilot => {
                                                                                const newName = document.createElement('li'); // create listobject
                                                                                newName.innerText = `Name: ${pilot.name}`;
                                                                                pilotsDetailList.appendChild(newName);

                                                                                const newHeight = document.createElement('li'); // create listobject
                                                                                newHeight.innerText = `Height: ${pilot.height}`;
                                                                                pilotsDetailList.appendChild(newHeight);

                                                                                const newGender = document.createElement('li'); // create listobject
                                                                                newGender.innerText = `Gender: ${pilot.gender}`;
                                                                                pilotsDetailList.appendChild(newGender);

                                                                                const newHairColor = document.createElement('li'); // create listobject
                                                                                newHairColor.innerText = `Hair Color: ${pilot['hair_color']}`;
                                                                                pilotsDetailList.appendChild(newHairColor);

                                                                                const newSkinColor = document.createElement('li'); // create listobject
                                                                                newSkinColor.innerText = `Skin Color: ${pilot['skin_color']}`;
                                                                                pilotsDetailList.appendChild(newSkinColor);
                                                                                // add Favorite Button ********************************************************************************************
                                                                                const favButton = document.createElement('button');
                                                                                favButton.innerText = 'Add to favorites';
                                                                                // event listener to add to favorites
                                                                                favButton.addEventListener('click', () => {
                                                                                    if (!document.getElementById(`${pilot.url}`)) {
                                                                                        const newLi = document.createElement('li');
                                                                                        const newA = document.createElement('a');
                                                                                        newLi.id = pilot.url;
                                                                                        newA.innerText = pilot.name; // append name to listobject text
                                                                                        newLi.appendChild(newA);

                                                                                        // add button to delete favorite *****************************************************************
                                                                                        const newDelButton = document.createElement('button');
                                                                                        newDelButton.innerText = 'x';
                                                                                        newDelButton.id = 'delete-button';
                                                                                        // add event listener to delete whole list element
                                                                                        newDelButton.addEventListener('click', () => {
                                                                                            favList.removeChild(document.getElementById(`${pilot.url}`));
                                                                                        });
                                                                                        // add button to delete favorite *****************************************************************

                                                                                        newLi.appendChild(newA);
                                                                                        newLi.appendChild(newDelButton);
                                                                                        favList.appendChild(newLi);
                                                                                    }
                                                                                });
                                                                                pilotsDetailList.appendChild(favButton);
                                                                                // end of add Favorite Button *************************************************************************************
                                                                            });
                                                                    });
                                                                    // end of adding pilots infos *************************************************************************
                                                                    newListObject.appendChild(newA);
                                                                    pilotsList.appendChild(newListObject);
                                                                });
                                                        });
                                                    } // if pilot unknown
                                                    else {
                                                        const newH3 = document.createElement('h3');
                                                        newH3.innerText = 'No Pilots known'; // append title to listobject text
                                                        pilotsList.appendChild(newH3);
                                                    }
                                                });
                                        });
                                        // end of adding pilots **************************************************************************
                                        newListObject.appendChild(newA);
                                        shipsList.appendChild(newListObject);
                                    });
                            });
                        });
                });
                // end of adding starships **************************************************************************

                newListObject.appendChild(newA);
                titleList.appendChild(newListObject);
            });
        });

    // end of adding movies **************************************************************************
};

getMovieTitles();
