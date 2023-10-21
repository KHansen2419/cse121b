/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile= {
    name: "Katie Hansen",
    photo: "myself.png",
    favoriteFoods: ['steak', 'queso', 'tacos', 'Korean BBQ', 'dark chocolate'],
    hobbies: ['knitting', 'baking', 'crocheting', 'writing', 'watching movies'],
    placesLived: [],


};



/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(

    {
        place: 'Littleton, CO',
        length: '18 years',
    },
    {
        place: 'Los Angeles, CA',
        length: '4 months',
    },
    {
        place: 'Rexburg, ID',
        place: '9 years',
    }
);





/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent= myProfile.name;

/* Photo with attributes */

document.getElementById("photo").src = "myself.png";


/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);

});


/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement("ul");
    ul.textContent = hobbies;
    document.querySelector('#hobbies').appendChild(ul);

});



/* Places Lived DataList */

myProfile.placesLived.forEach(placesLived => {
    let dt = document.createElement("dt");
    dt.innerHTML = place.place;
    document.querySelector('#places-lived').appendChild(dt);

});

myProfile.placesLived.forEach(placesLived => {
    let dd = document.createElement("dd");
    dd.innerHTML = `<strong>$ {places.place}`;
    document.getElementById('places-lived').appendChild(ddbreak);

});

