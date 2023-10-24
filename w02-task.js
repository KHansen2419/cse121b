/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName= 'Katie Hansen';
let currentYear= '2023';
let profilePicture= 'myself.png';


/* Step 3 - Element Variables */

const nameElement= document.getElementById('name');
const foodElement= document.querySelector("#food").textContent = favoriteFoods;
const yearElement= document.querySelector('#year');
const imageElement=document.querySelector('main #home picture image');



/* Step 4 - Adding Content */

nameElement.innerHTML= `<strong>${fullName}</strong>`;
currentYear.textContent= `${year}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute(alt, 'Profile Image of [myself.png]');





/* Step 5 - Array */

const favoriteFoods=['Steak', 'Tacos', 'Queso', 'Dark Chocolate'];
foodElement.textContent=favoriteFoods.join(",");
foodElement.innerHTML = favoriteFoods.join(', ') + '<br>' + foodElement.innerHTML;
let singleFavoriteFoods=('Sourdough Bread');

favoriteFoods.push(singleFavoriteFood);
foodElement.textContent=favoriteFoods.join(",");
foodElement.innerHTML = favoriteFoods.join(', ') + '<br>' + foodElement.innerHTML;


foodElement.innerHTML+= `<br>${favoriteFoods}`;
foods.splice(0, 1);
foodElement.innerHTML+= `<br>${favoriteFoods}`;
foods.splice(4,1);
foodElement.innerHTML+= `<br>${favoriteFoods}`;




