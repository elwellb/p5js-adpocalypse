
//Create variables and Ad image index
let adIndex = 
["./assets/surface/AntiAging.png", 
"./assets/surface/HolidaySale.png", 
"./assets/surface/LearnCode.png", 
"./assets/surface/RichGuy.png",
"./assets/surface/WalterEWhite.png",
"./assets/surface/VougeVista.png",
"./assets/surface/PawsBubbleTea.png",
"./assets/surface/GlobeTrek.png",
"./assets/surface/SurfaceDeeper1.png"];
let counter = 0;
let numberOfRefresh = 0;

//Remove Canvas and create a base layer for images
function setup () {
  noCanvas();
  randomizeOtherAds();

}


function draw() {
}

//Randomize position of newly created ad
function setAdPosition(ad) {

  //set width and height of image
  let adWidth = ad.width;
  let adHeight = ad.height;

  //randomize position of ad
  let adXPos = random()*windowWidth;
  let adYPos = random()*windowHeight;

  //if too far to left, push it left
  if (adXPos <= adWidth) {
    adXPos += adWidth;

  //if too far to right, push it right
  } else if (adXPos >= (windowWidth - adWidth)) {
    adXPos -= adWidth;
  }

  //if too high, bring down
  if (adYPos <= adHeight) {
    adYPos += adHeight;

  //if too low, push up
  } else if (adYPos >= (windowHeight - adHeight)) {
    adYPos -= adHeight;
  }

  //set ad to new positions
  ad.style.position = "absolute";
  ad.style.left = adXPos + "px";
  ad.style.top = adYPos + "px";
}

//reset page function
function refreshPage() {

  //create array of all divs created by randomizeOtherAds()
  let oldDivs = document.getElementsByClassName("surfaceAds");

  //for each one, set innerHTML to nothing to remove them
  for (let i = 0; i < oldDivs.length; i++) {
    oldDivs[i].innerHTML = "";
  }

  if (counter > 2){
    numberOfRefresh++;
  }
  numberOfRefresh++;
  //create new page of ads
  randomizeOtherAds();
}

//runs only if specific ad is clicked
function refreshPageDeeper() {

  numberOfRefresh = 0;
  //increase counter
  counter++;

  //replace image in index with new ad
  adIndex.splice(-1, 1, "/assets/surface/SurfaceDeeper" + (counter + 1) + ".png");

  //console.log(counter);

  //once counter reaches 5, send to deeper level
  if (counter == 5) {
    location = "index2.html";
  }
  
  //create new page of ads and reset page
  refreshPage();
}

//function to create ad page
function randomizeOtherAds() {

  //create 60-100 ads on the page
  for (let i = 0; i <= random(60,100); i++) {

    //selects an ad from the index
    let pickAd = round(random(adIndex.length-1))
    
    //create new div so it can be moved freely
    let adCopy = document.createElement("div");

    //set to surfaceAds class
    adCopy.className = "surfaceAds";

    zIndex = floor(random(5));
    //if ad is specific one, run refreshPageDeeper() to increase counter
    if (pickAd == 8) {
      adCopy.innerHTML = "<img src = " + adIndex[pickAd] + " width = " + random(150, 400) + "px height = auto onClick = refreshPageDeeper()>";
      adCopy.style.zIndex = numberOfRefresh;

      if (counter == 1) {
        adCopy.style.animation = "jump 1s linear infinite";
      } 
      if (counter >= 2) {
        adCopy.style.animation = "shakeAndJump 1s linear infinite";
      }
      
      if (counter >= 3) {
        adCopy.style.boxShadow = "0 0 50px 50px white";
      }

      if (counter >= 4) {
        adCopy.style.cursor = "help";
      }
      
    //if not, just refresh page
    } else {
      adCopy.innerHTML = "<img src = " + adIndex[pickAd] + " width = " + random(150, 400) + "px height = auto onClick = refreshPage()>";
      adCopy.style.zIndex = zIndex;
      
      if (counter == 1) {
        adCopy.style.filter = "blur(" + random(3) + "px)";
      }

      if (counter == 2) {
        adCopy.style.filter = "blur(" + random(5) + "px)";
      }

      if (counter == 3) {
        adCopy.style.filter = "blur(" + random(7) + "px)";
      }

      if (counter == 4) {
        adCopy.style.filter = "blur(" + random(10) + "px)";
      }
    }
    //set ad at random position
    setAdPosition(adCopy);
    //make ad a child of the document
    document.body.appendChild(adCopy);
  }
}
