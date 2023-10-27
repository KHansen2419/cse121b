
const yarnElement=document.querySelector('#yarns');

let yarnList=[];



const displayYarns= (yarns)=>{
    yarns.forEach((yarn) => {
        let article = document.createElement("article");
        let h3= document.createElement("h3");
        h3.textContent= yarn.yarnName + "Temple";

        let img = document.createElement("img");
        img.setAttribute=('src', yarn.imageUrl);
        img.setAttribute=('alt', yarn.fiber);

        article.appendChild(h3);
        article.appendChild(img);
        yarnElement.appendChild(article);

        console.log(yarnList);
        
        
    });
}





const getYarns= async() =>{
    const response = await fetch("https://run.mocky.io/v3/9427424a-49f0-49ad-b55c-68bf26c9d5b4");
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        const data = await response.json();
        yarnList=data;
        displayTemples(yarnList);
        console.log(yarnList);
}
};


/* reset Function */

const reset= function(){
    yarns
}


/* sortBy Function */

function sortBy(yarns) {
    // - Calls the reset function
    reset();
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
let filter = document.getElementById('sortBy');

switch (filter) {

    case '1-fingering':

    displayYarns(yarns.filter((fingeringYarns => {yarns.yarnWeight.includes("1-Fingering")})));

         break;
    case '2-Fine/Sport':

    displayYarns(yarns.filter((sportYarns => {yarns.yarnWeight.includes("2-Fine/Sport")})));
      break;
      case '2-Fine/Sport':

    displayYarns(yarns.filter((sportYarns => {yarns.yarnWeight.includes("2-Fine/Sport")})));
      break;
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
