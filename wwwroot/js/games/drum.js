export function playSound(audio_id) {
    var audio = new Audio('sounds/' + audio_id + '.wav');
    //var audio = document.getElementById(audio_id);    
    audio.play();    
}

