// Your code goes here
// * [ ] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use:
// 	* [√] `mouseover`
// 	* [ ] `keydown`
// 	* [ ] `wheel`
// 	* [ ] `drag / drop`
// 	* [√] `load`
// 	* [ ] `focus`
// 	* [ ] `resize`
// 	* [ ] `scroll`
// 	* [ ] `select`
// 	* [ ] `dblclick`


//fade from black on load:
var log = document.querySelector('body');

window.addEventListener('load', (event) => {
    log.animate({
    backgroundColor: ['black','white'],
    opacity: [ 0, 0.9, 1 ],
    offset: [ 0, 0.8 ], // Shorthand for [ 0, 0.8, 1 ]
    easing: [ 'ease-in', 'ease-out' ],
  }, 2000);
});
// BIG LETTER>little letter>BIG LETTER>little letter
let navItems = document.querySelectorAll('a');
navItems.forEach((aTags, i) => {

aTags.addEventListener('mouseover', (event)=>{
    aTags.animate({
      fontSize: ["20px", "40px", "30px","20px"],
      offset: [ 0, 0.8 ],
    }, 2000);
  })});

//   <audio id="audio" controls style="display:none">
//   <source src="http://butlerccwebdev.net/support/html5-video/media/soundfile.mp3" type="audio/mpeg"> Your browser does not support the audio element.
// </audio>
// document.addEventListener('keydown', function(e) {
//   if (e.keyCode == 65) {
//     document.getElementById('audio').play();
//   }
// });

// KEYPRESS audio

// var horn = new Audio('audio/bus-horn.wav');
//
// let audio = document.createElement('audio');
// audio.setAttribute("id", "audio");
// audio.setAttribute("src", 'audio/bus-horn.wav')
// audio.setAttribute("type", "audio/wav")
// // let audioFile = document.querySelector('#audio');
// // audioFile.src = ("audio/bus-horn.wav");
// // let playingAudio = document.querySelector('#audio');
// audio.addEventListener("keypress", (event)=>{
//   if(event.keyCode === 65){
//     horn.play();
//     console.log("playing");
//   }
// });
let intro = document.querySelector(".intro img");
intro.style.paddingTop = "160px";
document.querySelector(".main-navigation").setAttribute("id", "navbar");
let logo = document.querySelector(".logo-heading");
logo.setAttribute("id","logo");
logo.style.textShadow = "0px 11px 3px rgba(206,151,197,0.87)";
logo.addEventListener("keydown", (event)=>{
  logo.animate({
    color: ['red','green'],
    textShadow: ["0px 11px 3px rgba(206,151,197,0.87)", "4px -31px 15px rgba(206,151,197,0.87)", "text-shadow: 0px 4px 0px #CE97C5;","0px 11px 3px rgba(206,151,197,0.87)"],
    offset: [ 0, 0.8 ],
  }, 2000);
}
)
animate()
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "25px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "40px";
  }
}
