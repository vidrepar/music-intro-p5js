var song;
var button;
var amp;
var fft;

function setup() {

    createCanvas(windowHeight, windowHeight-50);
    song = loadSound('assets/sound/song.mp3', loaded);
    //amp = new p5.Amplitude();

    fft = new p5.FFT();
    fft.setInput(song);

    background(51);

}

/*
* this is a callback function
* */
function loaded() {
    console.log('loaded');

    button = createButton('play');
    button.mousePressed(togglePlaying);

}

function draw() {

    background(51);

    //var vol = amp.getLevel();
    var spectrum = fft.analyze();
    var diam;
    var fttSum;
    var fttAvg;

    console.log(spectrum);
    //console.log(vol);

    for (i = 0; i<spectrum.length; i++) {

        diam = map(spectrum[i], 0, 255, 10, 200);
        //fill(255, 0, 255);




        fttSum = 0;
        for( var i = 0; i < spectrum.length; i++ ){
            fttSum += parseInt( spectrum[i], 10 ); //don't forget to add the base
        }

        fttAvg = Math.floor(fttSum/spectrum.length);

    }

    console.log(fttAvg);

    if (fttAvg > 10 && fttAvg < 20) {
        fill(255, 255, 255);
        ellipse(width / 2, height / 2, diam, diam);
    } else if (fttAvg > 20 && fttAvg < 30) {
        rectMode(RADIUS);
        fill(255, 23, 35);
        rect(width / 2, height / 2, diam, diam);
    } else if (fttAvg > 30) {
        rectMode(RADIUS);
        fill(200, 135, 255);
        triangle(width/2, diam*2, diam*2, height-diam*2, width-diam*2, height-diam*2);
    }


    /*beginShape();
    for (i = 0; i<spectrum.length; i++) {
        vertex(i, map(spectrum[i], 0, 255, height, 0) );
    }
    endShape();*/

}

function togglePlaying() {

    if (!song.isPlaying()) {
        song.play();
        song.setVolume(0.05);
        button.html('pause');
    } else {
        song.pause();
        button.html('play');
    }
}
