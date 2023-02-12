
let rectR = 33;
let rectB = 33;
let rectG = 33;
let rectX = -1;


let textFill = 33;
let font = "Bungee";


let sec = 0;


let bcr = 173;
let bcg = 216;
let bcb = 230;


let cbR = 173;
let cbG = 214;
let cbB = 230;


let home = false;
let pF = 255;
let pF2 = 255;

let pS = false;
let hS = false;


let bO = 0;
let bO2 = 0;
let bO3 = 0;
let bO4 = 0;
let bO5 = 0;


let hY = 3;
let bF = 255;


let sw = 5;
var insertedText = '';
var username = '';
var namePut = false;
var typingMode = 0;


function draw() {
  
  
  createCanvas(windowWidth, windowHeight);
  background(rectR, rectG, rectB);
  
  noStroke();
  textAlign(CENTER);
  fill(textFill);
  textFont("Rubik Marker Hatch", windowHeight/7);
  text("Devon", windowWidth/2, windowHeight/2);
  textFont("Permanent Marker", windowHeight/15);
  text("presents", windowWidth/2, windowHeight/1.8);
  textFill += 1;  
  
  
  if (textFill > 255) {
  
    fill(rectR, rectG, rectB);
    rect(1000 / rectX, 0, 1000, 800);
    rectX += 0.1;
    sec += 0.1;
    fill(255);
    if (sec > 5) {
      rectX -= 0.1;
      rectR += 10;
      rectG += 10;
      rectB += 10;
    }
    if (rectR > bcr) { rectR -= 10; }
    if (rectG > bcg) { rectG -= 10; }
    if (rectB > bcb) { rectB -= 10; }
  
}
  if (sec > 7) {
    
    rectR = bcr;
    rectG = bcg;
    rectB = bcb;      
    fill(rectR, rectG, rectB);
    rect(0, 0, windowWidth, windowHeight);
    
    home = true;

if (mouseX > windowWidth/8 && mouseX < windowWidth/8+windowWidth/8*6 && mouseY > windowHeight/15*7 && mouseY < windowHeight/15*7+windowHeight/14) { pF = 230; } 
    else { pF = 255; }
if (mouseX > windowWidth/8 && mouseX < windowWidth/8+windowWidth/8*6 && mouseY > windowHeight/15*10 && mouseY < windowHeight/15*10+windowHeight/14) { pF2 = 230; } 
    else { pF2 = 255; }
    
}
  
  
  if (home === true) {
    
    fill(cbR, cbG, cbB);
    textFont(font, windowWidth/10);
    text("No Name Game", windowWidth/2, windowHeight/4);
    cbR += 3;
    cbG += 3;
    cbG += 3;
    fill(pF);
    rect(windowWidth/8, windowHeight/15 * 7, windowWidth/8 * 6, windowHeight/14, 10);
    fill(pF2);
    rect(windowWidth/8, windowHeight/15 * 10, windowWidth/8 * 6, windowHeight/14, 10);
    fill(bcr, bcg, bcb);
    textSize(windowHeight/14);
    text('PLAY', windowWidth/2, windowHeight/15 * 7.85);
    text('HOW', windowWidth/2, windowHeight/15 * 10.85);
    
if (mouseX > windowWidth/8 && mouseX < windowWidth/8+windowWidth/8*6 && mouseY > windowHeight/15*7 && mouseY < windowHeight/15*7+windowHeight/14 && mouseIsPressed)   { pS = true; } 
if (mouseX > windowWidth/8 && mouseX < windowWidth/8+windowWidth/8*6 && mouseY > windowHeight/15*10 && mouseY < windowHeight/15*10+windowHeight/14 && mouseIsPressed)   { hS = true; } 
    
}
  
  
  if (pS === true) {
    
    home = false;
    hS = false;
    
    bO = 255;
    
if (mouseX > windowWidth/10*2 && mouseX < windowWidth/10*8 && mouseY > windowHeight/7*3 && mouseY < windowHeight/7*4 && mouseIsPressed) { typingMode = 1; }
    
  }
  if (bO === 255) { bO2 += 10; }
  if (bO2 > 255) { bO3 += 1; }
  fill(255, 255, 255, bO2);
  rect(0, 0, windowWidth, windowHeight);
  fill(173, 216, 230, bO3);
  rect(0, 0, windowWidth, windowHeight);
  fill(144, 238, 144, bO3);
  rect(0, windowHeight/8*7.5, windowWidth, windowHeight/8, 25);
  strokeWeight(10);
  stroke(33, 33, 33, bO3);
  fill(255, 255, 255, bO3);
  text('NAME', windowWidth/2, windowHeight/2.5);
  rect(windowWidth/10*2, windowHeight/7*3, windowWidth/10*6, windowHeight/7, 25);
  noStroke();
  fill(33);
  textSize(windowWidth/15);
  text(insertedText, windowWidth/2, windowHeight/1.9);
  fill(173, 216, 230, bO2);
  rect(0,windowHeight/7*3,windowWidth/16*3.15,windowHeight/7);
  
  if (typingMode > 1) { typingMode = 0; }
  if (namePut === true) {
    
    strokeWeight(10);
    stroke(33, 33, 33, bO3);
    fill(255, 255, 255, bO3);
    rect(windowWidth/10*2, windowHeight/7*3, windowWidth/10*6, windowHeight/7*2, 25);
    noStroke();
    fill(173, 216, 230, bO2);
    rect(0,0,windowWidth,windowHeight/2.4);
    strokeWeight(10);
    stroke(33, 33, 33, bO3);
    fill(255, 255, 255, bO3);
    text('CHARACTER', windowWidth/2, windowHeight/2.5);
    textSize(windowWidth/30);
    text('p.s you can change this later', windowWidth/2, windowHeight/12 * 9);
    noStroke();
    fill(173, 216, 230, bO2);
    rect(windowWidth/10*8.1,windowHeight/7*3,windowWidth/16*3.15,windowHeight/7);
    
  }
  
  
  if (hS === true) {
    
    home = false;
    pS = false;
    
    bO4 = 255;
    
  }
  if (bO4 === 255) {
    
    hY += 0.1;
    bO5 += 10;

    if (mouseX > windowWidth/30 && mouseX < windowWidth/30+windowWidth/12 && mouseY > windowHeight/40 && mouseY < windowHeight/40+windowHeight/12) { bF = 244; } else { bF = 255; }
    if (mouseX > windowWidth/30 && mouseX < windowWidth/30+windowWidth/12 && mouseY > windowHeight/40 && mouseY < windowHeight/40+windowHeight/12 && mouseIsPressed) {
      
      bO4 = 0;
      bO5 = 0;
      hS = false;
      home = true;
      hY = 3;
      
    }
    
  }
  if (hY >= 6) { hY -= 0.1; }
  fill(bcr, bcg, bcb, bO4);
  rect(0, 0, windowWidth, windowHeight);
  fill(255, 255, 255, bO4);
  textFont(font, windowHeight/10);
  text("HOW", windowWidth/2, windowHeight/hY);
  fill(255, 255, 255, bO5);
  rect(windowWidth/12, windowHeight/12*3, windowWidth/12*10, windowHeight/12*8, 25);
  fill(bF, bF, bF, bO5);
  rect(windowWidth/30, windowHeight/40, windowWidth/12, windowHeight/15, 25);
  fill(bcr, bcg, bcb, bO4);
  textSize(windowWidth/35);
  text("back", windowWidth/13.5, windowHeight/13);
  
  
}

function keyPressed() {
        
        if (typingMode === 1) {

            if (keyCode === ENTER) { 
              insertedText = username;
              namePut = true;
              typingMode = 0;
            }
            else { insertedText = insertedText + key.toString(); }
          
            if (keyCode === DELETE || keyCode === BACKSPACE) { insertedText = ' '; }
          
        } // ← Typing Input
  
};
