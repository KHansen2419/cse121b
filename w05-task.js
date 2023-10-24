/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement=document.querySelector('#temples');

const templeList=[];


/* async displayTemples Function */

const displayTemples= (temples)=>{
    temples.forEach((temple) => {
        const article = document.createElement("article");
        const h3= document.createElement("h3");
        h3.textContent= temple.templeName + "Temple";

        const img = document.createElement("img");
        img.setAttribute=('src', temple.imageUrl);
        img.setAttribute=('alt', temple.location);

        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
        
    });
}




/* async getTemples Function using fetch()*/

const getTemples= async() =>{
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        const data = await response.json();
        templeList.push(data);
        displayTemples(templeList);
}
};


/* reset Function */

function reset() {
    return document.getElementById('temples').innerHTML = '';
  };
  


/* sortBy Function */

function sortBy(e) {
    // - Calls the reset function
    reset();
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
let sort = document.getElementById('sortBy');

  
if (e.target.value === 'templeNameAscending') {
  let sorted = templeList.sort(function(a,b) {return a.templeName>b.templeName ? 1 : -1});
  
  return output(sorted);

}else if (e.target.value === 'templeNameDescending') {
  let sorted = templeList.sort(function(a,b) {return b.templeName>a.templeName ? 1 : -1});
  
  return output(sorted);
};

};



getTemples();

/* Event Listener */
