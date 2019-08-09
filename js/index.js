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
var horn = new Audio('audio/bus-horn.wav');

let audio = document.createElement('audio');
audio.setAttribute("id", "audio");
let audioFile = document.getElementById('audio');
audioFile.addEventListener("keydown", (event)=>{
  if(event.keyCode === 40){
    horn.play();
  }
});
