// // src/sketch.js
// import p5 from 'p5';

const sketch = (p) => {
  // How many rows of waves to display
  let rows = 5;
  // What is the range of motion for a single wave (vertically)
  let waveMaxHeight = 330;
  // A base time value for our noise() function which we'll
  // use to move the waves overall
  let baseT = 0;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    p.background(255);
    drawWaves(rows);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  /**
   * Draws the specified number of waves on the canvas!
   */
  const drawWaves = (number) => {
    // Loop through all our rows and draw each wave
    // We loop "backwards" to draw them one on top of the other
    // nicely
    for (let i = number; i >= 0; i--) {
      drawWave(i, number);
    }
    // Increment the base time parameter so that the waves move
    baseT += 0.01;
  };

  /**
   * Draws the nth wave.
   *
   * Parameters are:
   * n - the number of the wave
   * rows - the total number of waves
   */
  const drawWave = (n, rows) => {
    // Calculate the base y for this wave based on an offset from the
    // bottom of the canvas and subtracting the number of waves
    // to move up. We're dividing the wave height in order to make the
    // waves overlap
    let baseY = p.height - n * waveMaxHeight / 3;
    // Get the starting time parameter for this wave based on the
    // base time and an offset based on the wave number
    let t = baseT + n * 100;
    // We'll start each wave at 0 on the x axis
    let startX = 0;
    // Let's start drawing
    p.push();
    // We'll use the HSB model to vary their color more easily
    p.colorMode(p.HSB);
    // Calculate the hue (0 - 360) based on the wave number, mapping
    // it to an HSB hue value
    let hue = p.map(n, 0, rows, 180, 220);
    p.fill(hue, 60, 80);
    p.noStroke();
    // We're using vertex-based drawing
    p.beginShape();
    // Starting vertex!
    p.vertex(startX, baseY);
    // Loop along the x axis drawing vertices for each point
    // along the noise() function in increments of 10
    for (let x = startX; x <= p.width; x += 10) {
      // Calculate the wave's y based on the noise() function
      // and the baseY
      let y = baseY - p.map(p.noise(t), 0, 1, 10, waveMaxHeight);
      // Draw our vertex
      p.vertex(x, y);
      // Increment our time parameter so the wave varies on y
      t += 0.01;
    }
    // Draw the final three vertices to close the shape around
    // the edges of the canvas
    p.vertex(p.width, baseY);
    p.vertex(p.width, p.height);
    p.vertex(0, p.height);
    // Done!
    p.endShape();
    p.pop();
  };
};

export default sketch;