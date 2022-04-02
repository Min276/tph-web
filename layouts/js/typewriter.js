const typeBox = document.getElementById("typewriter");
const typeWriter = new Typewriter('#typewriter', {
  // strings: ['setLightSwitch(on)', 'setLightSwitch(off)'],
  autoStart: true,
  loop: true,
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

typeWriter.typeString('setLightSwitch(on)')

  typeWriter.pauseFor(5000)
  // typingSound.pause();

typeWriter.deleteChars(10)

typeWriter.typeString('Switch(off)')

typeWriter.pauseFor(7000)
// typingSound.pause();

typeWriter.start();


function order() {
    typingSound.play();
    // setTimeout(() => typingSound.play())
    setTimeout(() => typingSound.pause(), 4000)
    setTimeout(() => typingSound.play(), 8500)
    setTimeout(() => typingSound.pause(), 9000)
    // setTimeout(() => typingSound.play(), 30000)

}





