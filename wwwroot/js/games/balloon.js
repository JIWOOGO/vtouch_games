var balloonCnt = 15;

export function OnClickStart() {            
    for (var i = 1; i <= balloonCnt; i++) {
        addballoons(i);
    }    
    document.getElementById("div_start").style.display = "none";
}

function Top() {
    return Math.floor(Math.random() * 85) + "%";
}

function Left() {
    return Math.floor(Math.random() * 90) + "%";
}

function addballoons(index) {
    var div = document.createElement("div");
    div.id = index;
    div.className = 'balloonBox';
    div.style.position = 'absolute';
    div.style.left = Left();
    div.style.top = Top();            
    div.innerHTML = index;            
    div.style.zIndex = balloonCnt - index + 10;
    div.style.backgroundImage = "url('images/games/balloons/" + index + ".png')";
    div.style.backgroundSize = "cover";
    div.style.backgroundRepeat = "no-repeat";
    div.style.cursor = "pointer";   
    div.style.width = "120px";
    div.style.height = "200px";
    div.style.textAlign = "center";
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
    div.style.fontSize = "2em";
    div.style.fontWeight = "bolder";
    div.style.color="black";
    
    document.getElementById('div_balloon').appendChild(div);
    div.addEventListener('mouseover', (e) => {
        OnClickballoon(e);
    })
}

var counter = 1;
function OnClickballoon(e) {            
    if (parseInt(e.target.id) == counter) {
        var audio = new Audio('sounds/pop.mp3');
        audio.play();
        e.target.remove();
        counter++;
    }
    else if (counter > balloonCnt) {
        counter = 1;     
    }                
}

$('#div_map').mouseover(function(e) {  
    if (counter > balloonCnt)
        document.getElementById("div_start").style.display = "block";
});