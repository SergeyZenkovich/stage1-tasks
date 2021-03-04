const piano = document.querySelector('.piano');
const pianoКeys = document.querySelectorAll('.piano-key');
const lettersButton = document.querySelector('.btn-letters');
const notesButton = document.querySelector('.btn-notes');
const fullScreenButton = document.querySelector('.fullscreen');

function addClassToKeys(addedClass) {
    pianoКeys.forEach((el)=>{
        console.log(el);
        el.classList.add(addedClass)}
        );
}
function removeClassFromKeys(removedClass) {
    pianoКeys.forEach((el)=>{
        el.classList.remove(removedClass);
    });
}
function makeLettersActive(){
    notesButton.classList.remove('btn-active');
    lettersButton.classList.add('btn-active');
    addClassToKeys('letter');
    
}
function makeNotessActive(){
    lettersButton.classList.remove('btn-active');
    notesButton.classList.add('btn-active');
    removeClassFromKeys('letter');
}
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

lettersButton.addEventListener('click', makeLettersActive);
notesButton.addEventListener('click', makeNotessActive);
fullScreenButton.addEventListener('click', toggleFullScreen);