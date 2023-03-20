var currentItem_main = 0;
var currentItem_panel = 0;
var currentItem_automotive = 0;
var currentItem_home = 0;

var MAXCOUNT_MAIN = 3;
var MAXCOUNT_PANEL = 13;
var MAXCOUNT_AUTOMOTIVE = 7;
var MAXCOUNT_HOME = 7;

export function OnClickThumb(type, index){   
    var video = document.getElementById("Video1");
    video.muted = false;
    video.loop = false;
    if(type == 0){
        currentItem_panel = index;        
        video.src = "/images/videos/mp4/panel/" + currentItem_panel + ".mp4";        
    }
    else if(type == 1){
        currentItem_automotive = index;        
        video.src = "/images/videos/mp4/automotive/" + currentItem_automotive + ".mp4";        
    }
    else if(type == 2){
        currentItem_home = index;        
        video.src = "/images/videos/mp4/home/" + currentItem_home + ".mp4";        
    }
    else if(type == 3){
        currentItem_main = index;        
        video.src = "/images/videos/mp4/main/" + currentItem_main + ".mp4";        
        if(index == 1)
            video.loop = true;
    }

    video.play();
    var span = document.getElementById("play");
    span.className = "oi oi-media-pause";
}

export function OnLoad()
{
    $('#modal-container')
        .removeAttr('class')
        .addClass('one');
    $('.content')
        .removeAttr('class')
        .addClass('content');

    $('.video-section').addClass('modal-active');

    var video = document.getElementById("Video1");
    currentItem_main = 1;        
    video.src = "/images/videos/mp4/main/" + currentItem_main + ".mp4";        
    video.loop = true;
    video.play();
    var span = document.getElementById("play");
    span.className = "oi oi-media-pause";
}

export function OnClickMoveVid(type, index)
{    
    var video = document.getElementById("Video1");
    video.muted = false;
    video.loop = false;
    if(type == 0){
        currentItem_panel += index;
        if(currentItem_panel == 0)        
            currentItem_panel = MAXCOUNT_PANEL;        
        else if (currentItem_panel > MAXCOUNT_PANEL)        
            currentItem_panel = 1;        
        
        video.src = "/images/videos/mp4/panel/" + currentItem_panel + ".mp4";        
    }
    else if(type == 1){
        currentItem_automotive += index;       
        if(currentItem_automotive == 0)        
            currentItem_automotive = MAXCOUNT_AUTOMOTIVE;        
        else if (currentItem_automotive > MAXCOUNT_AUTOMOTIVE)        
            currentItem_automotive = 1; 

        video.src = "/images/videos/mp4/automotive/" + currentItem_automotive + ".mp4";        
    }
    else if(type == 2){
        currentItem_home += index;       
        if(currentItem_home == 0)        
            currentItem_home = MAXCOUNT_HOME;        
        else if (currentItem_home > MAXCOUNT_HOME)        
            currentItem_home = 1;

        video.src = "/images/videos/mp4/home/" + currentItem_home + ".mp4";        
    }
    else if(type == 3){
        currentItem_main += index;     
        
        if(currentItem_main == 0)        
        currentItem_main = MAXCOUNT_MAIN;        
        else if (currentItem_main > MAXCOUNT_MAIN)        
        currentItem_main = 1;

        video.src = "/images/videos/mp4/main/" + currentItem_main + ".mp4";        
        if(index == 1)
            video.loop = true;
    }
    
    video.play();
    var span = document.getElementById("play");
    span.className = "oi oi-media-pause";
}

$('.carousel-item').on('click', function () {
    $('#modal-container')
        .removeAttr('class')
        .addClass('one');
        $('.content')
        .removeAttr('class')
        .addClass('content');
    
        $('.video-section').addClass('modal-active');  
  
});

var timeoutHandle;
$("#Video1, .controlButtonList").on('click', function () {    
    var div = document.getElementsByClassName("controlButtonList")[0];
    div.style["display"] = "block";
    window.clearTimeout(timeoutHandle);
    timeoutHandle = window.setTimeout(RemoveVideoController, 3000); // 타이머 3초 후 제거
});

function RemoveVideoController(){    
    var div = document.getElementsByClassName("controlButtonList")[0];
    div.style["display"] = "none";

}

$('#button_close').on('click', function () {
    $('#modal-container').addClass('out');
    $('.video-section').removeClass('modal-active');
    if ($('#modal-container').hasClass('one')) {      
        $('.content').addClass('out');      
    }
    document.getElementById("Video1").pause();
    $('.video-section').focus();
});

export function vidplay() {
    var video = document.getElementById("Video1");
    var span = document.getElementById("play");
    if (video.paused) {
        video.play();
        span.className = "oi oi-media-pause";
    } else {
        video.pause();
        span.className = "oi oi-media-play";
    }
}

export function restart() {
   var video = document.getElementById("Video1");
   video.currentTime = 0;
}

export function skip(value) {
   var video = document.getElementById("Video1");
   video.currentTime += value;
}

$(document).keydown(function(e){        
    var isModal = document.getElementsByClassName('modal-active');
    
    if(isModal.length > 0)
    {   
        if(e.keyCode == 38){ // 상
            skip(5);
        }
        else if(e.keyCode == 40){ // 하
            skip(-5);
        }
    }    
});

export function IsModalActive()
{
    var isModal = document.getElementsByClassName('modal-active');
    if(isModal.length > 0)
        return true;
    else
        return false;
}

