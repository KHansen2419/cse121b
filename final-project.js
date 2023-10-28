
const yarnElement=document.querySelector('#yarns');

let yarnList=[];



const displayYarns= (yarns)=>{
    yarns.forEach((yarn) => {
        let article = document.createElement("article");
        let h3= document.createElement("h3");
        
        h3.textContent= yarn.yarnName;
        
        
        

        let img = document.createElement("img");
        img.setAttribute('src', yarn.imageUrl);
        img.setAttribute('alt', yarn.yarnWeight);

        article.appendChild(h3);
        article.appendChild(img);
        yarnElement.appendChild(article);

        console.log(yarnList);
        
        
    });
}





const getYarns= async() =>{
    const response = await fetch("https://run.mocky.io/v3/19dd2e15-5c34-4ce7-94d0-fa9eea86e1bb");
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        const data = await response.json();
        yarnList=data;
        displayYarns(yarnList);
        console.log(yarnList);
}
};


/* reset Function */

const reset= function(){
  yarnElement.textContent="";
}


/* sortBy Function */

function sortBy(yarns) {
    // - Calls the reset function
    reset();
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
let filter = document.getElementById('sortBy').value;

switch (filter) {

    case '1-Fingering':

    displayYarns(yarns.filter(fingering => fingering.yarnWeight.includes("1-Fingering")));

         break;
    case '2-Fine/sport':

    displayYarns(yarns.filter(sport => sport.yarnWeight.includes("2-Fine/sport")));
      break;
      case '3-DK':

    displayYarns(yarns.filter(dk => dk.yarnWeight.includes("3-DK")));
      break;

      case '4-Worsted':

    displayYarns(yarns.filter(worsted => worsted.yarnWeight.includes("4-Worsted")));
      break;

      case '5-Bulky':

    displayYarns(yarns.filter(bulky => bulky.yarnWeight.includes("5-Bulky")));
      break;
      case '6-Super Bulky':

    displayYarns(yarns.filter(superBulky => superBulky.yarnWeight.includes("6-Super Bulky")));
      break;
      case '7-Jumbo':

    displayYarns(yarns.filter(jumbo => jumbo.yarnWeight.includes("7-Jumbo")));
      break;
      
    default:
      displayYarns(yarns);
  }
  

};


getYarns();


/* Event Listener */

document.querySelector('#sortBy').addEventListener('change', () => {sortBy(yarnList)});

