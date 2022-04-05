let typeBox = document.querySelector("#typewriter");
const typeWrite = new Typewriter(typeBox, {
  // strings: ['setLightSwitch(on)', 'setLightSwitch(off)'],
  autoStart: true,
  // loop: true,
});

const typingSound = new Audio('../images/typingSound.wav');
if(window.innerWidth <= 768 ){
  typingSound.pause();
}else {
 typingSound.play();
 typingSound.loop = true;
typingSound.autoplay = true;
setInterval(order, 1000)
}
typeWrite.start();

typeWrite.typeOutHTMLString('setLightSwitch(off)')

  typeWrite.pauseFor(5000)
  // typingSound.pause();

typeWrite.deleteChars(11)

typeWrite.typeOutHTMLString('Switch(on)')

typeWrite.pauseFor(7000)
// typingSound.pause();
setInterval(() => {
  let cursor = document.querySelector(".Typewriter__cursor");
  cursor.style.display = "none";
}, 15000)


function order() {
    typingSound.play();
    // setTimeout(() => typingSound.play())
    setTimeout(() => typingSound.pause(), 4000)
    setTimeout(() => typingSound.play(), 8500)
    setTimeout(() => typingSound.pause(), 9000)
    // setTimeout(() => typingSound.play(), 30000)
    if(typeBox.textContent.includes("setLightSwitch(on)")){
      console.log("LightSwitch(on)");
   }else if(typeBox.textContent.includes("setLightSwitch(off)")) {
      console.log("LightSwitch(off)");
   }

   typeBox.textContent.length > 20 ?
   typeBox.setAttribute("contenteditable", false):
   typeBox.setAttribute("contenteditable", true);
   
}






