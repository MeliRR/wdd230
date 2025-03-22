const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets); // temporary testing of data retreival
    displayProphets(data.prophets);
   
  }
  
  getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
      // Create elements to add to the document
      let card = document.createElement('section');
      let fullName = document.createElement('h2');
      let dateOfbirth = document.createElement('p');
      let placeOfbirth = document.createElement('p');
      let portrait = document.createElement('img');
      fullName.textContent = `${prophet.name} ${prophet.lastname}`;
      // this was not in the rubric but i added it due to the styling
      dateOfbirth.textContent = `Date of Birth: ${prophet.birthdate}`;
      placeOfbirth.textContent = `Place of Birth: ${prophet.birthplace}`;
      //end of non-rubric code
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');

      card.appendChild(fullName);
      card.appendChild(dateOfbirth);
      card.appendChild(placeOfbirth);
      card.appendChild(portrait);

      cards.appendChild(card);
    });
  }