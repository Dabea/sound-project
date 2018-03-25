var mic;
let amp;
function setup() {
  createCanvas(710, 200);

  // Create an Audio input
  mic = new p5.AudioIn();
  fft = new p5.FFT(.8, 512);
  fft.setInput(mic);
  

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}



function draw() {
  background(200);
  var spectrum = fft.analyze();
  stroke(255, 255, 255);

  for (var i  = 0; i < spectrum.length; i++) {
    var amp = spectrum[303- i]
    var y = map(amp, 0 ,255, height, 0);
    stroke((y * 2)-i, 80, 230);
    line(  i  , height , i  ,y );
}

for (var i  = 0; i < spectrum.length; i++) {
    var amp = spectrum[i]
    var y = map(amp, 0 ,255, height, 0);
    stroke((y * 2)+i, 80, 230);
    line( i + 300 , height , i +300 ,y );
}
 


  fill(127);
  stroke(0);
    stroke(255);
 






}