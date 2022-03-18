const typeBox = document.getElementById("typewriter");
const typeWriter = new Typewriter('#typewriter', {
  // strings: ['setLightSwitch(on)', 'setLightSwitch(off)'],
  autoStart: true,
  loop: true,
});

const typingSound = new Audio('../images/typingSound.wav');

typeWriter.typeString('setLightSwitch(on)')

  typeWriter.pauseFor(5000)
  // typingSound.pause();

typeWriter.deleteChars(10)

typeWriter.typeString('Switch(off)')

typeWriter.pauseFor(7000)
// typingSound.pause();

typeWriter.start();

// for (let i= 0; i < 100; i++) {
//   typingSound.loop = true;
//   typingSound.play();
//   setTimeout(() => typingSound.pause(), 3000)
//   setTimeout(() => typingSound.play(), 8000)
//   setTimeout(() => typingSound.pause(), 10000)
// }

typingSound.loop = true;
typingSound.autoplay = true;

function order() {
    typingSound.play();
    // setTimeout(() => typingSound.play())
    setTimeout(() => typingSound.pause(), 4000)
    setTimeout(() => typingSound.play(), 8500)
    setTimeout(() => typingSound.pause(), 9000)
    // setTimeout(() => typingSound.play(), 30000)

}

setInterval(order, 1000)



