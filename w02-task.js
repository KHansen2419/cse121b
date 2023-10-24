/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName= 'Katie Hansen';
let currentYear= '2023';
let profilePicture= 'images/myself.png';


/* Step 3 - Element Variables */

const nameElement= document.getElementById('name');
const foodElement= document.getElementById('food');
const yearElement= document.querySelector('#year');
let imageElement=document.querySelector('img');



/* Step 4 - Adding Content */

nameElement.innerHTML= `<strong>${fullName}</strong>`;
currentYear.textContent= `${year}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', 'Profile Image of ${profilePicture}');





/* Step 5 - Array */

let favoriteFoods=['Steak', 'Tacos', 'Queso', 'Dark Chocolate'];
foodElement.textContent=favoriteFoods.join(",");
foodElement.innerHTML = favoriteFoods.join(', ') + '<br>' + foodElement.innerHTML;
let singleFavoriteFoods=('Sourdough Bread');

favoriteFoods.push(singleFavoriteFoods);
foodElement.textContent=favoriteFoods.join(",");
foodElement.innerHTML = favoriteFoods.join(', ') + '<br>' + foodElement.innerHTML;


foodElement.innerHTML+= `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML+= `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML+= `<br>${favoriteFoods}`;



