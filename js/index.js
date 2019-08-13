// Your code goes here
// * [ ] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use:
// 	* [√] `mouseover`
// 	* [√] `keydown`
// 	* [√] `wheel`
// 	* [√] `animationstart`
// 	* [√] `load`
// 	* [√] `copy`
// 	* [√] `online`
// 	* [√] `scroll`
// 	* [√] `select`
// 	* [√] `click`

//online log
window.addEventListener('online', (event) => {
  console.log("your computer is watching you!!!");
});
//fade from black on load:
var log = document.querySelector('body');

window.addEventListener('load', (event) => {
  log.animate({
    backgroundColor: ['black', 'white'],
    opacity: [0, 0.9, 1],
    offset: [0, 0.8], // Shorthand for [ 0, 0.8, 1 ]
    easing: ['ease-in', 'ease-out'],
  }, 2000);
});
//scroll nav
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "25px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "40px";
  }
}

// BIG LETTER>little letter>BIG LETTER>little letter
let navItems = document.querySelectorAll('a');
navItems.forEach((as, i) => {
  as.addEventListener("click", (event) => {
    event.preventDefault();
  })
})
navItems.forEach((aTags, i) => {
  aTags.addEventListener('mouseover', (event) => {
    aTags.animate({
      fontSize: ["20px", "40px", "30px", "20px"],
      offset: [0, 0.8],
    }, 2000);
    aTags.addEventListener('animationstart', (e) => {
      console.log('Animation started');
    });
    logo.animate({
      color: ['red', 'green'],
      textShadow: ["0px 11px 3px rgba(206,151,197,0.87)", "4px -31px 15px rgba(206,151,197,0.87)", "text-shadow: 0px 4px 0px #CE97C5;", "0px 11px 3px rgba(206,151,197,0.87)"],
      offset: [0, 0.4, 0.8],
    }, 2000);
  })
});

let intro = document.querySelector(".intro img");
intro.style.paddingTop = "160px";
document.querySelector(".main-navigation").setAttribute("id", "navbar");



let logo = document.querySelector(".logo-heading");
logo.setAttribute("id", "logo");
logo.style.textShadow = "0px 11px 3px rgba(206,151,197,0.87)";




// Keydown horn


let dataKey = document.createElement("kbd");
dataKey.style.display = "none";
dataKey.setAttribute("data-key", "65");

var audiobtn = document.querySelector('.intro');
audiobtn.prepend(dataKey);
let addAudio = document.createElement('audio')
var body = document.querySelector('body');
body.appendChild(addAudio);
addAudio.setAttribute("src", 'audio/bus-horn.wav');
addAudio.setAttribute("data-key", "65")

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`kbd[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

window.addEventListener('keydown', playSound);


//BTN FUNC
function animateBtn(event) {

  event.stopPropagation()
  event.currentTarget.animate({
    backgroundColor: ['green', "blue", 'yellow'],
    opacity: [0, 0.9, 1],
    offset: [0, 0.8], // Shorthand for [ 0, 0.8, 1 ]
    easing: ['ease-in', 'ease-out'],
  }, 2000);
}
// btns
let btn = document.querySelectorAll('.btn')
btn[0].setAttribute("id", "btn-1");
btn[1].setAttribute("id", "btn-2");
btn[2].setAttribute("id", "btn-3");
let btn1 = document.querySelector("#btn-1");
let btn2 = document.querySelector("#btn-2");
let btn3 = document.querySelector("#btn-3");
btn1.addEventListener("click", animateBtn);
btn2.addEventListener('click', animateBtn);
btn3.addEventListener('click', animateBtn);
//



//select h2s

let h2Input1 = document.createElement("input");
h2Input1.value = "Welcome To Fun Bus!";
h2Input1.style.fontFamily = "'Indie Flower', cursive"
h2Input1.style.fontSize = "3.2rem"
h2Input1.style.marginBlockStart = "0.83em";
h2Input1.style.marginBlockEnd = "0.83em";
h2Input1.style.marginInlineStart = "0px";
h2Input1.style.marginInlineEnd = "0px";
h2Input1.style.display = "block";
h2Input1.style.border = "none";
h2Input1.addEventListener('select', (event) => {
  h2Input1.animate({
    color: ["red", "orange", "yellow", "orange", "red"],
  }, 3000);
});
let h2Input2 = document.createElement("input");
let h2Input3 = document.createElement("input");
let h2Input4 = document.createElement("input");

let pS = document.querySelectorAll("p");
//copy to upper case
pS.forEach((pTags, i) => {
  pTags.setAttribute("contenteditable", "true");
  pTags.addEventListener('copy', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    event.preventDefault();
  })
});
pS[0].prepend(h2Input1);
let h2s = document.querySelectorAll('h2');
h2s[0].style.display = "none";
//h4s[1].textContent = siteContent['main-content']["about-h4"];
//h4s[2].textContent = siteContent['main-content']["services-h4"];
//h4s[3].textContent = siteContent['main-content']["product-h4"];
//


//WHEEL Func
function blowUpWheel(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(.01, scale), 2);

  // Apply scale transform
  wheelImg.style.transform = `scale(${scale})`;
}
let scale = 1;
let headImg = document.querySelector("img").setAttribute("id", "head-img");
let wheelImg = document.querySelector("#head-img");
wheelImg.addEventListener("wheel", blowUpWheel);

// //focus
// let footer = document.querySelector("footer")
// // var x = document.createElement("FORM");
// // function myFunction() {
// //   var x = document.createElement("FORM");
// //   x.setAttribute("id", "myForm");
// //   body.appendChild(x);
// //
// //   var y = document.createElement("INPUT");
// //   // y.stopPropagation();
// //   y.setAttribute("type", "text");
// //   y.setAttribute("value", "Donald");
// //   document.getElementById("myForm").appendChild(y);
// // }
// let form = document.createElement("form");
// form.setAttribute("name", "fname");
// form.setAttribute("id", "fname");
// let formlabel = document.createElement("label");
// formlabel.setAttribute("for", "fname");
// formlabel.style.textContent = "Tell Us Your Story"
// let formInput = document.createElement("input");
// formInput.setAttribute("type", "text");
// formInput.setAttribute("id", "formIn");
// let formIn = document.querySelector("#formIn");
//
// formIn.style.width = "100%";
// formIn.style.fontSize = "25px";
// // form.setAttribute("autocomplete", "on");
// log.append("form");
// form.append('formlabel');
// form.append("formIn")

//






//video


// //<div class="player">
// footer.insertBefore(".player")
// let player = document.createElement("div")
// player.setAttribute("class", "player");
//   //  <video class="player__video viewer" src="652333414.mp4"></video>
// let video = document.createElement("video");
// video.setAttribute("class", "player__video viewer")
// video.setAttribute("src", "video/652333414.mp4")
//   //<div class="player__controls">
// let playerControls = document.createElement("div");
// playerControls.setAttribute("class", "player__controls");
// //
//
// //       <div class="progress">
// let progress = document.createElement("div");
// progress.setAttribute("class","progress");
//
// //        <div class="progress__filled"></div>
// let progressFilled = document.createElement("div");
// progress.setAttribute('class', 'progress__filled')
// //       </div>
// //       <button class="player__button toggle" title="Toggle Play">►</button>
// let playerButton = document.createElement("button");
// progress.setAttribute('class', 'player__button toggle');
// progress.setAttribute('title', "Toggle to Play");
// progress.setAttribute('textContent',"►");
//
// //       <input type="range" name="volume" class="player__slider" min="0" max="1" step="0.05" value="1">
// let volume = document.createElement("input");
// volume.setAttribute('type' , "range");
// volume.setAttribute('name' , "volume");
// volume.setAttribute("class", "player__slider");
// volume.setAttribute("min", "0");
// volume.setAttribute("max", "1");
// volume.setAttribute("step", "0.5");
// volume.setAttribute("value", "1");
// //       <input type="range" name="playbackRate" class="player__slider" min="0.5" max="2" step="0.1" value="1">
// let playbackRate = document.createElement("input");
// playbackRate.setAttribute('type' , "range");
// playbackRate.setAttribute('name' , "playbackRate");
// playbackRate.setAttribute("class", "player__slider");
// playbackRate.setAttribute("min", "0.5");
// playbackRate.setAttribute("max", "2");
// playbackRate.setAttribute("step", "0.1");
// playbackRate.setAttribute("value", "1");
// //<button data-skip="-10" class="player__button">« 10s</button>
// let skipBtnBack = document.createElement("button");
// skipBtnBack.setAttribute('class', 'player__button');
// skipBtnBack.setAttribute('data-skip', "-10");
// skipBtnBack.setAttribute('textContent',"« 10s");
// //       <button data-skip="25" class="player__button">25s »</button>
// let skipBtn = document.createElement("button");
// skipBtn.setAttribute('class', 'player__button');
// skipBtn.setAttribute('data-skip', "25");
// skipBtn.setAttribute('textContent',"25s »");
//     </div>
//   </div>
// video.prepend(player);
// footer.prepend(player);
//
//
