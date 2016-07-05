var song;
var button;
var jumpButton;

function setup() {

    createCanvas(200, 200);
    song = loadSound('assets/sound/song.mp3', loaded);
    button = createButton('play');
    button.mousePressed(togglePlaying);
    jumpButton = createButton('jump');
    jumpButton.mousePressed(jumpSong);

    background(51);

    song.addCue(2, changeBackground, color(0,0,255));
    song.addCue(4, changeBackground, color(0,255,255));
    song.addCue(6, changeBackground, color(255,255,255));

}

function changeBackground(col) {

    background(col);

}

/*
* this is a callback function
* */
function loaded() {
    console.log('loaded');
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

function jumpSong() {
    
}

