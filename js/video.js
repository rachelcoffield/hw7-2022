var video;

// STEP: Intialize the video element and turn off autoplay and turn off looping
window.addEventListener("load", function(){
	console.log("Good job opening the window")
	video = document.querySelector(".video");
	video.load();
	video.autoplay = false;
	video.loop = false;
});

// STEP: Play the video and update the volume information 
// event listener for clicking play 
// make the video play
// select where volume will be displayed, tell it to output the vid's volume 
// fix the 0->1 scale
document.querySelector("#play").addEventListener("click", function(){
	console.log("Play Video");
	video.play();
	document.getElementById("volume").innerHTML = video.volume*100 + "%";
});

// STEP: Pause the video.
document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause video");
	video.pause();
})

// STEP: Slow the current video speed by 10% each time the button is clicked and log the new speed to the console. 
// select the slow down button
// make playback speed .9 of current 
// update console 
document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow video");
	video.playbackRate -= .1;
	console.log(video.playbackRate);
})

// STEP: Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again
// select the speed up button
// make playback speed 1.1 of original
// update console
document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed video");
	video.playbackRate += .1;
	console.log(video.playbackRate);
})

// STEP: Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
// select the skip ahead button
// set current time to +10 seconds

document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skip button");
	if ((video.currentTime + 10) > video.duration){
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log(video.currentTime);
})


// STEP: Mute/unmute the video and update the text in the button.
// select the mute button
// enable mute function
// change text
document.querySelector("#mute").addEventListener("click", function(){
	console.log("Mute button");
	if (video.muted == true){
		video.muted = false;
		this.innerHTML = "Mute";
	} else {
		video.muted = true;
		this.innerHTML = "Unmute";
	}
})

// STEP: Change the volume based on the slider and update the volume information.
// event listener for changing the slider 
// select where volume will be displayed, tell it to output slider value  
document.querySelector("#slider").addEventListener("input", function(){
	console.log("Slider input");
	document.getElementById("volume").innerHTML = this.value + "%";
	video.volume = ((this.value)/100);
	console.log(video.volume);
})

// STEP: Utilize the existing oldSchool class on the video element
// select oldSchool button
// enable oldSchool
// apply css class oldSchool to video element
document.querySelector("#vintage").addEventListener("click", function(){
	console.log("oldSchool button");
	video.classList.add("oldSchool");
})

// STEP: Remove the oldSchool class from the video.
// select original button
// remove oldSchool class to remove styling
document.querySelector("#orig").addEventListener("click", function(){
	console.log("Original button");
	video.classList.remove("oldSchool");
})


// misc 
	// var slider = document.querySelector("#slider");
	// output.innerHTML = slider.value;
	// slider.oninput = function(){
	// 	output.innerHTML = this.value;
	// }
// }
// function for slider

// function play() {
// 	console.log("Play Video");
// 	video.play();
// 	document.getElementById("volume").innerHTML = video.volume*100 + "%";
// } 

// document.querySelector("#play").addEventListener("click", play());