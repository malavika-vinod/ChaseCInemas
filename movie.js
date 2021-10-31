var my=document.getElementById("myVideo");
function muteVideo()
{   if (my.muted === true) {    
    my.muted = false;
    document.getElementById('myImage').src='unmute.png.png';
}

else if(my.muted===false) {
my.muted=true;
document.getElementById('myImage').src='mute.png.png';
}

}
function pauseVideo()
{
    if(my.paused)
    {
        my.play();
        document.getElementById('myPause').src='pause.png';
    }
    else{
       my.pause();
       document.getElementById('myPause').src='play.png';
}
}
function restart() {
    var video = document.getElementById("myVideo");
    video.currentTime = 0;
}
