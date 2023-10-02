//Initialize Variables
let w; //width of window
let h; //height of window
let capture = null; //capture taken from camera
let tracker = null; //facial tracker to grab points
let bgcolor; //background color
let positions; //postions of tracker
let circleSize; //size of circle based on mouth size

function setup() {
  
  //set width and height of window
  w = windowWidth;
  h = windowHeight;

  //create canvas
  createCanvas(w, h);

  //set background
  bgcolor = color(0,0,1);
  background(bgcolor);

  //create capture from camera and hide
  capture = createCapture(VIDEO);
  capture.size(w, h);
  capture.hide();

  //create tracker
  tracker = new clm.tracker();
  tracker.init();
  tracker.start(capture.elt);

  frameRate(10);

  let canvas = document.createElement("canvas");
  canvas.getContext("2d", {willReadFrequently: true});


}

function draw() {

  //flip canvas to get mirror image
  translate(w, 0);
  scale(-1,1);

  //Draw orange square
  clear();
  fill(bgcolor);
  rect(0, 0, w, h);

  //uncomment line below to see image input
  image(capture, 0, 0, w, h);

  //set positions to tracker points
  positions = tracker.getCurrentPosition();
  
  //If tracker runs and creates positions, run loop
  if (positions.length > 0) {

    //set eye points
    const eye1 = {
      left: getPoint(23),
      right: getPoint(25),
      center: getPoint(27),
      top: getPoint(24),
      bottom: getPoint(26)
    };

    const eye2 = {
      left: getPoint(30),
      right: getPoint(28),
      center: getPoint(32),
      top: getPoint(29),
      bottom: getPoint(31)
    };

    //set mouth points
    const upperLip = {
      left: getPoint(44),
      center: getPoint(60),
      right: getPoint(50)
    };

    const bottomLip = {
      left: getPoint(44),
      center: getPoint(57),
      right: getPoint(50)
    };
  
    //find eye locations
    let eye1Location = findLocation(eye1);
    let eye2Location = findLocation(eye2);

    //set middle of eye positions
    let eyeXMiddle = (round(eye1Location[0]) + round(eye2Location[0]))/2;
    let eyeYMiddle = (round(eye1Location[1]) + round(eye2Location[1]))/2;

    //set in-between eye location for removal circle
    let eyeMiddle = [round(eyeXMiddle), round(eyeYMiddle)];

    //send position of middle eye location to console
    //console.log(eyeMiddle[0] + ", " + eyeMiddle[1]);

    let upperLipPos = lipArray(upperLip);
    let bottomLipPos = lipArray(bottomLip);

    circleSize = 20 + dist(upperLipPos[0], upperLipPos[1], bottomLipPos[0], bottomLipPos[1]);

    //reveal circle based on middle eye position
    revealArea(eyeMiddle, circleSize);
  }
}


//getPoint function
function getPoint(index) {

  //create [x, y] for each position in eye
  return createVector(positions[index][0], positions[index][1]);
}

//remove circle from black square
function revealArea(location, size) {
  let coordinates = [location[0], location[1]];
  //remove pixels NOT AFFECTING IMAGES & BACKGROUND
  erase();

  //create circle
  ellipse(round(location[0]), round(location[1]), size);

  noErase();
  //go back to normal
}

//find center of eye
function findLocation(eye) {
  
  let eyeLocation = [];

  //if center of eye could not be read
  if ((eye.center.x == null) || (eye.center.y == null)) {

    //find distance between left and right side of eye
    let eyeXDist = dist(eye.left, eye.right);

    //set X value to center of eye
    let eyeXCenter = eye.left.x + eyeXDist/2;

    //find distance between top and bottom of eye
    let eyeYDist = dist(eye.top, eye.bottom);

    //set Y value to center of eye
    let eyeYCenter = eye.bottom.y + eyeYDist/2;

    //set eyeLocation to [x,y]
    eyeLocation = [eyeXCenter, eyeYCenter];

    return eyeLocation;
  
  //if center of eye is read
  } else {
    //create array based on eye center location
    eyeLocation = [eye.center.x, eye.center.y];

    return eyeLocation;
  }


}
function windowResized() {
  w = windowWidth;
  h = windowHeight;
  resizeCanvas(w, h);
  background(0,0,1);
}

function lipArray(lip) {
  let position = [lip.center.x, lip.center.y];

  return position;
}