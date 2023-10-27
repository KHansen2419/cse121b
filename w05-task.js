/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement=document.querySelector('#temples');

let templeList=[];


/* async displayTemples Function */

const displayTemples= (temples)=>{
    temples.forEach((temple) => {
        let article = document.createElement("article");
        let h3= document.createElement("h3");
        h3.textContent= temple.templeName + " Temple";

        let img = document.createElement("img");
        img.setAttribute=('src', temple.imageUrl);
        img.setAttribute=('alt', temple.location);

        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);

        console.log(templeList);
        
        
    });
}




/* async getTemples Function using fetch()*/

const getTemples= async() =>{
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        const data = await response.json();
        templeList=data;
        displayTemples(templeList);
        console.log(templeList);
}
};


/* reset Function */

const reset= function(){
    temples
}


/* sortBy Function */

function sortBy(temples) {
    // - Calls the reset function
    reset();
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
let filter = document.getElementById('sortBy');

switch (filter) {

    case 'utah':

    displayTemples(temples.filter((utahTemples => {temples.location.includes("Utah")})));

         break;
    case 'notutah':

    displayTemples(temples.filter((notUtahTemples => {!temples.location.includes("Utah")})));

   
      break
      case "older":
        //Filter for temples dedicated before 1950
        displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
        break;
    default:
      displayTemples(temples);
  }
  
if (e.target.value === 'templeNameAscending') {
  let sorted = templeList.sort(function(a,b) {return a.templeName>b.templeName ? 1 : -1});
  
  return output(sorted);

}else if (e.target.value === 'templeNameDescending') {
  let sorted = templeList.sort(function(a,b) {return b.templeName>a.templeName ? 1 : -1});
  
  return output(sorted);
};

};





/* Event Listener */

document.querySelector('#sortBy').addEventListener('change', () => {sortBy(templeList)});


getTemples();
