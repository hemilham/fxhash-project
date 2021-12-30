// include a comment about LICENSE.md in sketch.js


//use fxrand() to determine code



let x = 0;
var cols = 48;
var rows = 48;
let phase = 100;
let zoff = 0;
let xoff = 0;
let noiseScale = 0.1;
let yoff = 0.0;
let noiseMax = 5;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  fxseed=int(1e8*fxrand(),fill(fxrand()*220, fxrand()*108, fxrand()*164)),
  fxseed2=int(4*fxrand(), fill(random(225,128, 220))),
  pattern=int(24*fxrand(), stroke(random(24,16*fxrand()), rect(fxrand()*(210, 128, 100),128, 108)))

}

function draw() {
  background(fxseed2*random(220), fxseed*random(140), pattern*random(128) );

  beginShape();

  for (var i = 0; i < cols; i++) {


    for (var j = 0; j < rows; j++) {
      var x = random(
        (i * windowWidth/6) / random(fxseed2, 24),
        (i * windowWidth/6) / random(fxseed2, 48) + noiseScale
      );
      var y = random(
        ((j+fxseed2) * windowHeight) / random(16, 24),
        ((j+fxseed2) * windowHeight) / random(32, 48) + noiseMax
      );
      

    if (keyIsDown(UP_ARROW)) {
      i = random(
        ((i *fxseed2) * fxseed2*8) * windowWidth*random(16),
        (i * windowWidth/8) * windowWidth*random(32, 48) + noiseScale
      );
     j = random(
        (j * fxseed/8) * windowHeight*random(16),
        (j * windowHeight/8) * windowHeight*random(32, 48) + noiseMax
      );
      ;
      
      phase = random(windowWidth/8);
      noiseScale = random(0.01, 0.05);
      xoff += (1.15);
      zoff += random(1.2);

    }

      let noiseVal = noise(
        (mouseX * map(xoff, yoff, zoff, 1, 100, 128) + x) * noiseScale,
        mouseY * noiseScale
      );

      stroke(
        random(mouseY +fxseed2 * noiseVal + 1080 / mouseX + pattern + noiseVal * 1080) / 2,
        random(noiseVal * 255),
        random(pattern*128 * x)
      );

      rect(
        ((x / noiseVal) * noiseMax) / 2,
         (y * noiseVal + noiseMax),
        1080+fxseed2*fxrand(),
        1080+pattern,
      );
      //colormode(fxrand)
      fill(fxseed2+108 / noiseVal*fxseed), fxseed*55, pattern*108;
      rectMode(CENTER);

      strokeWeight(
        map(noiseVal, windowWidth / 100, windowHeight * 120, random(220), 255) *
          2
      );

      xoff += 0.15;
      zoff += 0.2;
    }
  }

  yoff += 0.01;
  vertex(windowWidth*fxseed, windowHeight);
  endShape(CLOSE);
}










