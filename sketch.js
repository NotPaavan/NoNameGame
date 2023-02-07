
var rectR = 33;
var rectB = 33;
var rectG = 33;
var rectX = -1;

var textFill = 33;
var font = "Bungee";

var sec = 0;

var bcr = 173;
var bcg = 216;
var bcb = 230;

var home = false;

var cbR = 174;
var cbG = 217;
var cbB = 231;

var pF = 255;
var pF2 = 255;
var pF3 = 255;

var pS = false;
var hS = false;
var sM = false;

var bO = 0;
var bO2 = 0;
var bO3 = 0;
var bO4 = 0;
var bO5 = 0;
var bO6 = 0;

var bF = 255;
var pY = 3;
var hY = 3;
var sY = 3;


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

if (mouseX > windowWidth/8 && mouseX < windowWidth/8+windowWidth/8*6 && mouseY > windowHeight/15*6 && mouseY < windowHeight/15*6+windowHeight/14) { pF = 230; } 
    else { pF = 255; }
if (mouseX > windowWidth/8 && mouseX < windowWidth/8+windowWidth/8*6 && mouseY > windowHeight/15*8 && mouseY < windowHeight/15*8+windowHeight/14) { pF2 = 230; } 
    else { pF2 = 255; }
if (mouseX > windowWidth/8 && mouseX < windowWidth/8+windowWidth/8*6 && mouseY > windowHeight/15*10 && mouseY < windowHeight/15*10+windowHeight/14) { pF3 = 230; } 
    else { pF3 = 255; }
    
}
  
  if (home === true) {
    
    fill(cbR, cbG, cbB);
    textFont(font, windowWidth/10);
    text("No Name Game", windowWidth/2, windowHeight/4);
    cbR += 3;
    cbG += 3;
    cbG += 3;
    fill(pF);
    rect(windowWidth/8, windowHeight/15 * 6, windowWidth/8 * 6, windowHeight/14, 10);
    fill(pF2);
    rect(windowWidth/8, windowHeight/15 * 8, windowWidth/8 * 6, windowHeight/14, 10);
    fill(pF3);
    rect(windowWidth/8, windowHeight/15 * 10, windowWidth/8 * 6, windowHeight/14, 10);
    fill(bcr, bcg, bcb);
    textSize(windowHeight/14);
    text('PLAY', windowWidth/2, windowHeight/15 * 6.85);
    text('HOW', windowWidth/2, windowHeight/15 * 8.85);
    text('SETTINGS', windowWidth/2, windowHeight/15 * 10.85);
    
if (mouseX > windowWidth/8 && mouseX < windowWidth/8+windowWidth/8*6 && mouseY > windowHeight/15*6 && mouseY < windowHeight/15*6+windowHeight/14 && mouseIsPressed)   { pS = true; } 
if (mouseX > windowWidth/8 && mouseX < windowWidth/8+windowWidth/8*6 && mouseY > windowHeight/15*8 && mouseY < windowHeight/15*8+windowHeight/14 && mouseIsPressed)   { hS = true; } 
if (mouseX > windowWidth/8 && mouseX < windowWidth/8+windowWidth/8*6 && mouseY > windowHeight/15*10 && mouseY < windowHeight/15*10+windowHeight/14 && mouseIsPressed) { sM = true; } 
    
}
  
  if (pS === true) {
    
    home = false;
    hS = false;
    sM = false;
    
    bO = 255;
    
  }
  if (bO === 255) {
    
    pY += 0.1;
    bO2 += 10;

    if (mouseX > windowWidth/30 && mouseX < windowWidth/30+windowWidth/12 && mouseY > windowHeight/40 && mouseY < windowHeight/40+windowHeight/12) { bF = 244; } else { bF = 255; }
    if (mouseX > windowWidth/30 && mouseX < windowWidth/30+windowWidth/12 && mouseY > windowHeight/40 && mouseY < windowHeight/40+windowHeight/12 && mouseIsPressed) {
      
      bO = 0;
      bO2 = 0;
      pS = false;
      home = true;
      pY = 3;
      
    }
    
  }
  if (pY >= 6) {
    pY -= 0.1;
  }
  fill(bcr, bcg, bcb, bO);
  rect(0, 0, windowWidth, windowHeight);
  fill(255, 255, 255, bO);
  textFont(font, windowHeight/10);
  text("No Name Game", windowWidth/2, windowHeight/pY);
  fill(255, 255, 255, bO2);
  rect(windowWidth/12, windowHeight/12*3, windowWidth/12*10, windowHeight/12*8, 25);
  fill(bF, bF, bF, bO2);
  rect(windowWidth/30, windowHeight/40, windowWidth/12, windowHeight/15, 25);
  fill(bcr, bcg, bcb, bO);
  textSize(windowWidth/35);
  text("back", windowWidth/13.5, windowHeight/13);
  
  if (hS === true) {
    
    home = false;
    pS = false;
    sM = false;
    
    bO3 = 255;
    
  }
  if (bO3 === 255) {
    
    hY += 0.1;
    bO4 += 10;

    if (mouseX > windowWidth/30 && mouseX < windowWidth/30+windowWidth/12 && mouseY > windowHeight/40 && mouseY < windowHeight/40+windowHeight/12) { bF2 = 244; } else { bF2 = 255; }
    if (mouseX > windowWidth/30 && mouseX < windowWidth/30+windowWidth/12 && mouseY > windowHeight/40 && mouseY < windowHeight/40+windowHeight/12 && mouseIsPressed) {
      
      bO3 = 0;
      bO4 = 0;
      hS = false;
      home = true;
      hY = 3;
      
    }
    
  }
  if (hY >= 6) {
    hY -= 0.1;
  }
  fill(bcr, bcg, bcb, bO3);
  rect(0, 0, windowWidth, windowHeight);
  fill(255, 255, 255, bO3);
  textFont(font, windowHeight/10);
  text("HOW", windowWidth/2, windowHeight/hY);
  fill(255, 255, 255, bO4);
  rect(windowWidth/12, windowHeight/12*3, windowWidth/12*10, windowHeight/12*8, 25);
  fill(bF, bF, bF, bO4);
  rect(windowWidth/30, windowHeight/40, windowWidth/12, windowHeight/15, 25);
  fill(bcr, bcg, bcb, bO3);
  textSize(windowWidth/35);
  text("back", windowWidth/13.5, windowHeight/13);
  
  if (sM === true) {
    
    home = false;
    pS = false;
    hS = false;
    
    bO5 = 255;
    
  }
  if (bO5 === 255) {
    
    sY += 0.1;
    bO6 += 10;

    if (mouseX > windowWidth/30 && mouseX < windowWidth/30+windowWidth/12 && mouseY > windowHeight/40 && mouseY < windowHeight/40+windowHeight/12) { bF2 = 244; } else { bF2 = 255; }
    if (mouseX > windowWidth/30 && mouseX < windowWidth/30+windowWidth/12 && mouseY > windowHeight/40 && mouseY < windowHeight/40+windowHeight/12 && mouseIsPressed) {
      
      bO5 = 0;
      bO6 = 0;
      sM = false;
      home = true;
      sY = 3;
      
    }
    
  }
  if (sY >= 6) {
    sY -= 0.1;
  }
  fill(bcr, bcg, bcb, bO5);
  rect(0, 0, windowWidth, windowHeight);
  fill(255, 255, 255, bO5);
  textFont(font, windowHeight/10);
  text("SETTINGS", windowWidth/2, windowHeight/sY);
  fill(255, 255, 255, bO6);
  rect(windowWidth/12, windowHeight/12*3, windowWidth/12*10, windowHeight/12*8, 25);
  fill(bF, bF, bF, bO6);
  rect(windowWidth/30, windowHeight/40, windowWidth/12, windowHeight/15, 25);
  fill(bcr, bcg, bcb, bO5);
  textSize(windowWidth/35);
  text("back", windowWidth/13.5, windowHeight/13);
  
}
