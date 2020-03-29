let centerX, centerY;
let bars_num;
let radious;
let seed;

let explosion;

function setup() {
  createCanvas(800, 800);
  centerX = width / 2;
  centerY = height / 2;
  radious = min(centerX, centerY) / 4;
  bars_num = 100;
  values_to_sin = 0;
  seed = 0;
}

function draw() {
  randomSeed(seed);
  background(0);
  stroke(255);
  strokeWeight(5);

  let perlin_seed = 0;
  for (let b = 0; b < bars_num; b += 1) {
    offset = noise(perlin_seed) * TWO_PI;
    multiplier = (sin(values_to_sin + offset) + 1)  * radious;
    let bar = map(b, 0, bars_num, 0, TWO_PI) - HALF_PI;
    let lineX = centerX + cos(bar) * multiplier;
    let lineY = centerY + sin(bar) * multiplier;
    line(centerX, centerY, lineX, lineY);
    perlin_seed += 0.1;
  }
  values_to_sin += 0.05;
  seed +=1;
}

