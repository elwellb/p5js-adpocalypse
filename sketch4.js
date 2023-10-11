
//Create variables and Ad image index
let adIndex = 
["/assets/dark/Blackmail.png", 
"/assets/dark/DrugPharmacy.png", 
"/assets/dark/Forum.png", 
"/assets/dark/GunAd.png",
"/assets/dark/Hitman4Hire.png",
"/assets/dark/Identity.png",
"/assets/dark/Password.png",
"/assets/dark/RedRoom.png"];
let stage = 0;
let startClickTime;
let endClickTime;
let screenMove = false;
let download = 0;
let interval;
let openWindowPages = false;

//Remove Canvas and create a base layer for images
function setup () {
  alert("I should properly introduce myself.");
  alert("I am V, but you can call me your worst nightmare.");
  noCanvas();
  randomizeOtherAds();
  document.body.style.backgroundColor = "black";
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
  let oldDivs = document.getElementsByClassName("darkAds");

  //for each one, set innerHTML to nothing to remove them
  for (let i = 0; i < oldDivs.length; i++) {
    oldDivs[i].innerHTML = "";
  }
  stage++;
  stageLevel(stage);

  download += 5;

  if (screenMove == true) {
    window.scrollTo(random(windowWidth), random(windowHeight));
    window.resizeTo(random(windowWidth), random(windowHeight));
    window.moveTo(random(windowWidth), random(windowHeight));
  }

  document.title = "Downloading... " + download + "%";
  //create new page of ads
  randomizeOtherAds();
}


//function to create ad page
function randomizeOtherAds() {

  //create 60-100 ads on the page
  for (let i = 0; i <= random(60,100); i++) {

    //selects an ad from the index
    let pickAd = round(random(adIndex.length-1))

    //create new div so it can be moved freely
    let adCopy = document.createElement("div");

    //set to adsCopy class
    adCopy.className = "darkAds";

  
    //just refresh page
      adCopy.innerHTML = "<img src = " + adIndex[pickAd] + " width = " + random(150, 400) + "px height = auto onClick = refreshPage()>";

      if (stage >= 5) {
        adCopy.style.filter = "invert(" + random(100) + "%)";
      }
      if (stage >= 10) {
        adCopy.style.filter = "invert(" + random(100) + "%); drop-shadow(0 0 " + random(50) + "px " + random(100) + "px #" + floor(random()*16777215) + ")";
      }
      if (stage >= 15) {
        adCopy.style.filter = "invert(" + random(100) + "%); drop-shadow(0 0 " + random(50) + "px " + random(100) + "px #" + floor(random()*16777215) + "); contrast(" + random(100) + "%)";
      }
    
      let hasGlow = round(random());
      let randomAnim = round(random(2));
      if (randomAnim == 1) {
        adCopy.style.animation = "jump 1s linear infinite";
      } 
      if (randomAnim == 2) {
        adCopy.style.animation = "shakeAndJump 1s linear infinite";
      }
      if (hasGlow == 1) {
        adCopy.style.boxShadow = "0 0 25px 25px white";
      }

      if(stage >= 10) {
        adCopy.onmouseover = function(){runAway(adCopy)};
      }
      //set ad at random position
    setAdPosition(adCopy);
    
    //make ad a child of the document
    document.body.appendChild(adCopy);
  }

}

function removeMouse() {
  document.body.style.cursor = "none";
}


function stageLevel(stageNumber) {
  if (stageNumber == 1) {
    alert("You won't be needing that here, so I've gone ahead and removed that pesky mouse of yours for you. You're welcome :)");
    removeMouse();
  } 
  else if (stageNumber == 5) {
    confirm("Will you stop clicking? That's all you've done so far on this journey.");
  }
  else if (stageNumber == 10) {
    alert("You're still trying, huh? You know theres nothing past this, right? After I'm done with you, you're PC will be nothing but a table weight.");
    alert("Time to have some more fun.");
  }
  
  else if (stageNumber == 15) {
    alert("You just don't give up do you? The virus upload is at 80%, by the way. You had your chance to leave before you came here.");
    window.blur()
  }
  else if (stageNumber == 20) {
    alert("The download is complete. It's been nice knowing you, user. I hope you learned something because I sure did.");
    alert("(Idiots like you fall for anything shiny and moving)");
    location.href="index.html";
  }
}

function runAway(ad) {

  let randomX = floor(random() * (windowWidth-100));
  let randomY = floor(random() * (windowHeight-100));

  ad.style.left = randomX + "px";
  ad.style.top = randomY + "px";
}