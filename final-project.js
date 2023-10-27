
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
      case '3-dk':

    displayYarns(yarns.filter((dkYarns => {yarns.yarnWeight.includes("3-dk")})));
      break;

      case '4-worsted':

    displayYarns(yarns.filter((worstedYarns => {yarns.yarnWeight.includes("4-worsted")})));
      break;

      case '5-bulky':

    displayYarns(yarns.filter((bulkyYarns => {yarns.yarnWeight.includes("5-bulky")})));
      break;
      case '6-super bulky':

    displayYarns(yarns.filter((superBulkyYarns => {yarns.yarnWeight.includes("6-Super bulky")})));
      break;
      case '7-jumbo':

    displayYarns(yarns.filter((jumboYarns => {yarns.yarnWeight.includes("7-jumbo")})));
      break;
      
    default:
      displayYarns(yarns);
  }
  
if (e.target.value === 'yarnNameAscending') {
  let sorted = yarnList.sort(function(a,b) {return a.yarnName>b.yarnName ? 1 : -1});
  
  return output(sorted);

}else if (e.target.value === 'yarnNameDescending') {
  let sorted = yarnList.sort(function(a,b) {return b.yarnName>a.yarnName ? 1 : -1});
  
  return output(sorted);
};

};





/* Event Listener */

document.querySelector('#sortBy').addEventListener('change', () => {sortBy(yarnList)});


getYarns();
