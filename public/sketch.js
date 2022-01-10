// include a comment about LICENSE.md in sketch.js


//use fxrand() to determine code



var cols = 48;
var rows = 48;
let phase = 100;
let zoff = 0;
let xoff = 0;
let noiseScale = 0.1;
let yoff = 0.0;
let noiseMax = 5;
let c = color(255, 204, 0);
let redValue = red(c)

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  fxseed=int(1e8*fxrand(),fill(fxrand()*220, fxrand()*72, fxrand()*24),),
  fxseed2=int(4*fxrand(), fill(random(225,128, 220))),
  pattern=int(24*fxrand(), stroke(random(24,16*fxrand()), rect(fxrand()*(210, 128, 100),64/alpha, 16*noiseScale)))
  alpha=int(fxrand(color(0.4*pattern, 250*fxrand(), random(128,72,128), fxrand()*102)));
  magenta=int(fxrand(fill(random(225,72,16))),stroke(fxrand*124, fill(255,128,fxrand()*64)));
  red=int(128*fxrand(),fill(255, 204, 0));
  blue=int(1e8*fxrand(),fill(random(255*red),random(128),random(255))*map(windowWidth,100,0,23,noiseMax))

}

function draw() {
  background(pattern*random(noiseMax*220,128,22+alpha), fxseed*random(140,alpha,264), pattern*random(128) );

  beginShape();

  for (var i = 0; i < cols; i++) {


    for (var j = 0; j < rows; j++) {
      var x = random(
        (i * windowWidth/6+fxseed2) / random(fxseed2, 24+magenta*noiseMax),
        (i * windowWidth/6+fxseed2) / random(fxseed2, 48) + noiseScale
      );
      var y = random(
        ((j*fxseed2) * windowHeight+red) / blue*random(16/red, 24*magenta),
        ((j+fxseed2) * windowHeight+red) / random(32, 48*(magenta*noiseMax)) + noiseMax
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
        (fxseed*map(alpha, pattern, fxseed2, 1, 100, 128) + x) * noiseScale,
        alpha* noiseScale
      );

      stroke(
        alpha*random(2220+random(128,alpha*128,64) +fxseed2 * noiseVal + 1080 / mouseX + pattern + noiseVal * 1080) / 2,
        random(noiseVal * alpha+128),
        random(pattern*128 - 128*alpha )
      );

      rect(
        ((x / noiseVal) * log(noiseMax+pattern, alpha, 10/magenta, 16)) / 2,
         (y * noiseVal + noiseMax),
        1080+fxseed2*map(windowWidth+fxseed2,red*72,10/noiseVal,alpha,noiseVal+alpha),
        1080+pattern*fxseed2,
      );

      fill(random(random(fxseed2+108 / noiseVal*fxseed), alpha*random(255,128,fxseed2), pattern*108+red),255*magenta, random(255,64,70)*alpha);
      rectMode(CENTER);

      strokeWeight(
        map(noiseVal+red, windowWidth / 100, windowHeight * 120, random(220), 255) *
          2
      );

      //xoff += 0.15;
      //zoff += 0.2;
    }
  }

  //yoff += 0.01;
  vertex(windowWidth*fxseed, windowHeight);
  endShape(CLOSE);
}










