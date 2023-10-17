/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName= "Katie Hansen";
let currentYear= "2023";
let profilePicture= 'images/myself.png';


/* Step 3 - Element Variables */

const nameElement= document.getElementById('name');
const foodElement= document.getElementById([foods]);
const yearElement= document.querySelector('#year');
const imageElement=document.getElementById('images/myself.png');



/* Step 4 - Adding Content */

nameElement.innerHTML= `<strong>${fullName}</strong>`;
currentYear.textContent= `${year}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute(alt, 'Profile Image of [myself.png]');





/* Step 5 - Array */

foods=['Steak', 'Tacos', 'Queso', 'Dark Chocolate'];
foods.push('Sourdough Bread');
foodElement.innerHTML+= `<br>${foods}`;
foods.splice(0, 1);
foodElement.innerHTML+= `<br>${foods}`;
foods.splice(4,1);
foodElement.innerHTML+= `<br>${foods}`;




