
//Create variables and Ad image index
let adIndex = 
["/assets/deep/AcademicInformation.png", 
"/assets/deep/Bank.png", 
"/assets/deep/MedicalRecord.png", 
"/assets/deep/ScientificReports.png",
"/assets/deep/SearchEngine.png",
"/assets/deep/SignedDocument.png",
"/assets/deep/Subscription.png",
"/assets/deep/DeepDeeper1.png"];
let counter = 0;
let popup;
let numberOfRefresh = 0;
//Remove Canvas and create a base layer for images
function setup() {
  noCanvas();
  randomizeOtherAds();
  enterPrompt();
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

  numberOfRefresh++;
  //create array of all divs created by randomizeOtherAds()
  let oldDivs = document.getElementsByClassName("deepAds");

  //for each one, set innerHTML to nothing to remove them
  for (let i = 0; i < oldDivs.length; i++) {
    oldDivs[i].innerHTML = "";
  }

  //create new page of ads
  randomizeOtherAds();
}

//runs only if specific ad is clicked
function refreshPageDeeper() {

  //increase counter
  counter++;

  //replace image in index with new ad
  adIndex.splice(-1, 1, "/assets/deep/DeepDeeper" + (counter + 1) + ".png");

  if(counter == 1) {


    document.title = "H̶̢̢̦͉͙̠͙̘͌̎ę̴̡̛͈̫̹͓͍͕̤͔̲̏͗̔̈̌̍̄̅̕̕l̸̢̨̝͔̩͔͈͇̹͎̭̻͓̅̍̽́̾̑̈́ͅl̵͔̦͕͓͔͓͔̉o̵̗̝̮͈̪̺͙̼͖̔̊͂̈́̑͜͝͝,̶͖̙̙͖̣̖̪͉̳̱̄̀͗̋ ̸̡͓͉̻̪̍̋̽̐̈́̄̀̒̃͑́̂͘͠͝F̵̨̡̧̻̣̜̻͈̗̹̰̹͔̪̉͑r̷͎̝͕̱͎͔͙̈̽̾̏̒͛͑͒͂͛̓͆̈́̚̚i̶̢̩̪̦̩̥̟̬̲͈̲̩͈͊͗͆̓̄͆ę̷͉͈̩̥̻̖̏̇̽͐͗͆̓̆̎̑n̵̖̮̲̻̼͎̫̙͖̜̭̟̓̒̇̐̈͆͐́̈̔͋̚͠d̷̜̟̆̈́̐̐̈́̽̕.̴̲̻̠̦̺̂̿͊͋̽̅̆͗̓͌̀̉͠͠";


  }

  if (counter == 2) {
    alert("I am begging you to leave.");


    document.title = "S̴͎͎͖̤̹̣̻̻̿̆̄̑̾͛̂̏͑́̂͝͠t̸̡̥̠̼̬̥̱̱̙͓̖̗̦̏̉̓͒͂̓͜å̵̳̗̝͎͇͍̗͙̔̔̐͝ͅy̵̡̛̺͖̪͕͎̱̻̥̲̓̓̌̃̊̑͊͑͘.̴̟͗͒͊͗̆̈́͝";

  }
  //console.log(counter);
  if (counter == 3) {
    popup = confirm("If you go deeper you are putting yourself at risk.");

    if (popup == false) {
      alert("Congrats, you're one of the smart ones.");
      location="index.html"
    } else {
    document.title = "C̶̳̼̘̠͕̫͐̍͂̑̾̑̔̌͠ó̵̝̫̮͊̈́̚͠m̷̢̛̫̜̱̜̗͓̤̈̆́͐͗̒̃̌́ȅ̵͓̩̥̪͎̳̔̒̈́͗̽̽̔̕͠ ̴̝͋͛͆̃͘̚j̶̻͙̰̈̂̔̎̇͋̐̀o̶̙̤̙̊̌̏̏i̶̡͒̔̏̒͛͘͜n̷̲͊̋̾̀͌̏̍̚ͅ ̸̖̇̀̍̈́m̵̙̟͙̎̾͐̎̀̿̈́̾̕͠e̸̘̿̓̃̀̔̈́̈́̈́͝"
    document.body.style.backgroundImage = "/assets/deep/signedDocument.png"
    }
  }

  //replace all images to same image
  if (counter == 4) {
    document.title = "Ý̴̢͚̘̯͕̜̥͕͇̓̀̎̉͑̿̕͘̕͜ő̷̢̺̩̰̹̾̑̚͜͠ư̵͖̫̩̝͛́̍̊̇̂̂̀͘ ̵̡̤͖̖̆́̒̓̐͋̅͑́͠m̷̥̣̻̓̅̀̄̓̄̚͜ä̷̙̘̬́̈́̂͗͝k̶̫̭͚̰̩̯̜͗̇̈́͛e̸̡̠͇͓̬̫̾̑ ̵̧̰̫̥͍̣̟͔̃̇͆̎t̷̤̲͓̫̄̐́͆͛͐͌h̶̜̭̆͠ḭ̶̡̦̩̖̎̒͌͗̃͌s̸̼̐̀̌̏̀ ̶̧̦̫̺̜̺̻̺͊͑͗̋̐̀͊̀̐̚t̶̛͖̱̺̭̃͆̽̒͝ó̶̪̎̓ò̸̡̢͖̺̫̏̏̊̐̎͂̈͝͠ ̷͔̖̦͂͛̌́͐͐̐͘̕e̴̛̦͊̔̅̀̄̐̾͋͊a̵̯̰̪̾̓͆̽̈͘s̴͓̳̪͔̝̻̳͌͗̂̋͌̾̈́̅̉̽y̷̲͙̠̜̻̰̿͊̌̎̽͊";
    let emptyAds = ["/assets/deep/DeepDeeper5.png"];
    adIndex = emptyAds;
  }
  //once counter reaches 5, send to deeper level
  if (counter == 5) {
    location = "index3.html";
  }
  numberOfRefresh = 0;
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

    //set to adsCopy class
    adCopy.className = "deepAds";

    //if ad is specific one, run refreshPageDeeper() to increase counter
    if (pickAd == adIndex.length-1) {
      adCopy.innerHTML = "<img src = " + adIndex[pickAd] + " width = " + random(150, 400) + "px height = auto onClick = refreshPageDeeper()>";
      adCopy.style.zIndex = numberOfRefresh;
      if (counter >= 2) {
        adCopy.style.boxShadow = "0 0 50px 50px black";
      }


    //if not, just refresh page
    } else {
      adCopy.innerHTML = "<img src = " + adIndex[pickAd] + " width = " + random(150, 400) + "px height = auto onClick = refreshPage()>";
    }

    
    if (counter >= 2) {
      adCopy.onmouseover = function(){runAway(adCopy)};
    }
    //set ad at random position
    setAdPosition(adCopy);
    
    //make ad a child of the document
    document.body.appendChild(adCopy);
  }

}


function runAway(ad) {

  let randomX = floor(random() * (windowWidth-100));
  let randomY = floor(random() * (windowHeight-100));

  ad.style.left = randomX + "px";
  ad.style.top = randomY + "px";
}

function enterPrompt() {
  let response = confirm("You are now entering the Deep Web, are you sure you wish to continue?");

  if (response == false) {
    alert("Good choice, I wouldn't trust him either.");
    location.href("index.html");

  }

  alert("Don't listen to the voices down here, they aren't real.");
}

