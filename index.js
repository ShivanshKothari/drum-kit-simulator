var tom1 = new Audio('sounds/tom-1.mp3');
var tom2 = new Audio('sounds/tom-2.mp3');
var tom3 = new Audio('sounds/tom-3.mp3');
var tom4 = new Audio('sounds/tom-4.mp3');
var snare = new Audio('sounds/snare.mp3');
var kick = new Audio('sounds/kick.mp3');
var crash = new Audio('sounds/crash.mp3');


console.log($(".drum").length)
for (let i = 0; i < $(".drum").length; i++) {
    var drum = $(".drum").eq(i);

    drum.on("click", function() {
        audioPlayer($(this).text());
    });
}

$(document).keydown(function(e) {
    audioPlayer(e.key);
})



function audioPlayer(instrument) {
    var audioElement = null;

    // Reset the playback position for all audio elements
    tom1.currentTime = 0;
    tom2.currentTime = 0;
    tom3.currentTime = 0;
    tom4.currentTime = 0;
    snare.currentTime = 0;
    kick.currentTime = 0;
    crash.currentTime = 0;

    switch (instrument) {
        case "w":
            audioElement = tom1;
            break;
        case "a":
            audioElement = tom2;
            break;
        case "s":
            audioElement = tom3;
            break;
        case "d":
            audioElement = tom4;
            break;
        case "j":
            audioElement = snare;
            break;
        case "k":
            audioElement = kick;
            break;
        case "l":
            audioElement = crash;
            break;
    }

    if (audioElement) {
        // Plays the selected sound
        audioElement.play();
    }

    $("." + instrument).toggleClass("pressed");

    setTimeout(function () {
        $("." + instrument).toggleClass("pressed");
    }, 300);
}
