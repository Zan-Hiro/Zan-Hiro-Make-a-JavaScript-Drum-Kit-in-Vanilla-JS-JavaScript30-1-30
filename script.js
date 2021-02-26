const dataA = document.querySelector("[data-key='65']");
const dataS = document.querySelector("[data-key='83']");
const dataD = document.querySelector("[data-key='68']");
const dataF = document.querySelector("[data-key='70']");
const dataG = document.querySelector("[data-key='71']");
const dataH = document.querySelector("[data-key='72']");
const dataJ = document.querySelector("[data-key='74']");
const dataK = document.querySelector("[data-key='75']");
const dataL = document.querySelector("[data-key='76']");

const clap = new Audio();
const hihat = new Audio();
const kick = new Audio();
const openhat = new Audio();
const boom = new Audio();
const ride = new Audio();
const snare = new Audio();
const tom = new Audio();
const tink = new Audio();

clap.src = "sounds/clap.wav";
hihat.src = "sounds/hihat.wav";
kick.src = "sounds/kick.wav";
openhat.src = "sounds/openhat.wav";
boom.src = "sounds/boom.wav";
ride.src = "sounds/ride.wav";
snare.src = "sounds/snare.wav";
tink.src = "sounds/tink.wav";
tom.src = "sounds/tom.wav";

document.addEventListener('keydown', event => {
  if(event.code === "KeyA") {
    dataA.style.border = '1px solid blue';
    clap.play();
  } else if (event.code === "KeyS") {
    dataS.style.border = '1px solid blue';
    hihat.play();
  } else if (event.code === "KeyD") {
    dataD.style.border = '1px solid blue';
    kick.play();
  } else if (event.code === "KeyF") {
    dataF.style.border = '1px solid blue';
    openhat.play();
  } else if (event.code === "KeyG") {
    dataG.style.border = '1px solid blue';
    boom.play();
  } else if (event.code === "KeyG") {
    dataG.style.border = '1px solid blue';
    boom.play();
  } else if (event.code === "KeyH") {
    dataH.style.border = '1px solid blue';
    ride.play();
  } else if (event.code === "KeyJ") {
    dataJ.style.border = '1px solid blue';
    snare.play();
  } else if (event.code === "KeyK") {
    dataK.style.border = '1px solid blue';
    tom.play();
  } else if (event.code === "KeyL") {
    dataL.style.border = '1px solid blue';
    tink.play();
  } 
})

document.addEventListener('keyup', event => {
  if(event.code === "KeyA") {
    dataA.style.border = 'none';
  } else if (event.code === "KeyS") {
    dataS.style.border = 'none';
  } else if (event.code === "KeyD") {
    dataD.style.border = 'none';
  } else if (event.code === "KeyF") {
    dataF.style.border = 'none';
  } else if (event.code === "KeyG") {
    dataG.style.border = 'none';
  } else if (event.code === "KeyG") {
    dataG.style.border = 'none';
  } else if (event.code === "KeyH") {
    dataH.style.border = 'none';
  } else if (event.code === "KeyJ") {
    dataJ.style.border = 'none';
  } else if (event.code === "KeyK") {
    dataK.style.border = 'none';
  } else if (event.code === "KeyL") {
    dataL.style.border = 'none';
  } 
})

