// Get the button that opens the modal
var btnsettings = document.getElementById("myBtnSettings");
// When the user clicks the button, open the modal 
btnsettings.onclick = function() {
  document.getElementById("urlDIV").style.display = "block";
  myNotify('open URL dialog..');
}

function openFullscreen() {
var elem = document.getElementById("body");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
	myNotify('Goes Fullscreen..');
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
	myNotify('Goes Fullscreen..');
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
	myNotify('Goes Fullscreen..');
  }
}
/* Get into full screen */
function GoInFullscreen(element) {
	if(element.requestFullscreen)
		element.requestFullscreen();
	else if(element.mozRequestFullScreen)
		element.mozRequestFullScreen();
	else if(element.webkitRequestFullscreen)
		element.webkitRequestFullscreen();
	else if(element.msRequestFullscreen)
		element.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_element = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || null;
	
	// If no element is in full-screen
	if(full_screen_element === null)
		return false;
	else
		return true;
}

$("#go-button").on('click', function() {
	if(IsFullScreenCurrently())
		GoOutFullscreen();
	else {
		GoInFullscreen($(":root").get(0));
		//const root = document.querySelector(":root");
		//root.style.setProperty("--background", getComputedStyle(root).getPropertyValue('--background'));
	}
});

$(document).on('fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange', function() {
	if(IsFullScreenCurrently()) {
		//$("#container span").text('Full Screen Mode Enabled');
		myNotify('Full Screen Mode Enabled..');
		$("#go-button").text('Disable Full Screen');
	}
	else {
		//$("#container span").text('Full Screen Mode Disabled');
		myNotify('Full Screen Mode Disabled..');
		$("#go-button").text('Enable Full Screen');
	}
});

