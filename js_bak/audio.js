var musicBg, musicGmf, musicCrash, musicWin, isPlayMusic = true;
var initAudio = function() {
    musicBg = document.createElement("audio");
    musicBg.loop = 'loop';
    musicBg.preload = 'auto';
    // musicBg.controls = 'controls';
    // musicBg.autoplay = 'autoplay';
    musicBg.src = 'mp3/bg.mp3';
    document.body.appendChild(musicBg);
    musicGmf = document.createElement("audio");
    musicGmf.src = 'mp3/gmf0.mp3';
    musicGmf.preload = 'auto';
    document.body.appendChild(musicGmf);
    musicCrash = document.createElement("audio");
    musicCrash.src = 'mp3/crash.mp3';
    musicCrash.preload = 'auto';
    document.body.appendChild(musicCrash);
    musicWin = document.createElement("audio");
    musicWin.src = 'mp3/win.mp3';
    musicWin.preload = 'auto';
    document.body.appendChild(musicWin);
    $('.musicOn').on('touchstart', playOrPauseMusic);
};
var playOrPauseMusic = function(event) {
    if (isPlayMusic) {
        isPlayMusic = false;
        musicBg.pause();
        $(event.target).addClass('musicOff');
    } else {
        isPlayMusic = true;
        musicBg.play();
        $(event.target).removeClass('musicOff');
    }
};