(function () {

	"use strict";

	//===== Prealoder

	window.onload = function () {
		window.setTimeout(fadeout, 200);
	}

	function fadeout() {
		document.querySelector('.preloader').style.opacity = '0';
		document.querySelector('.preloader').style.display = 'none';
	}
})();


function openFullscreen(elemId, language) {
	var button = document.getElementById("button_fullscreen");	
	button.innerHTML = language;	
    var elem = document.getElementById(elemId);
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    } 
}

/* Close fullscreen */
function closeFullscreen(language) {	
	var button = document.getElementById("button_fullscreen");
	button.innerHTML = language;

	if (document.exitFullscreen) {
	  document.exitFullscreen();
	} else if (document.webkitExitFullscreen) { /* Safari */
	  document.webkitExitFullscreen();
	} else if (document.msExitFullscreen) { /* IE11 */
	  document.msExitFullscreen();
	}
}

function setCurrentCulture(cultureName) {
    document.cookie = "BlazorCulture=" + cultureName + ";path=/";
    location.reload();
}

