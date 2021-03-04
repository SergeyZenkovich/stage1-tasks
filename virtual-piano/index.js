const piano = document.querySelector('.piano');
const pianoКeys = document.querySelectorAll('.piano-key');
const lettersButton = document.querySelector('.btn-letters');
const notesButton = document.querySelector('.btn-notes');
const fullScreenButton = document.querySelector('.fullscreen');

function addClassToKeys(addedClass) {
    pianoКeys.forEach((el)=>{
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
function audioPlayByKeyboard(e){
    if(e.repeat) return;
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const note  = document.querySelector(`.piano-key[data-letter="${e.code[e.code.length-1]}"]`);
    if(!note) return;
    if(!audio) return;
    note.classList.add('piano-key-active');
    audio.currentTime = 0;
    audio.play();
}
function audioPlayByClick(e){
    if(!e.target.classList.contains('piano-key'))return;
    pianoКeys.forEach((el) => {
        if(el.classList.contains('active')) {
          el.classList.remove('active');
        }
      });
      const audio = document.querySelector(`audio[data-key="Key${e.target.dataset.letter}"]`);
      e.target.classList.add('active');
      audio.currentTime = 0;
      audio.play();
      glissando();
}
function PlayOnOver(e){
    if(!e.target.classList.contains('piano-key'))return;
    const audio = document.querySelector(`audio[data-key="Key${e.target.dataset.letter}"]`);
    audio.play()
}
function glissando(){
    pianoКeys.forEach((el) => {
          el.addEventListener('mouseover', PlayOnOver);
      });
}
function stopPlayingByClick(){
    pianoКeys.forEach((el) => {
        el.removeEventListener('mouseover', PlayOnOver);
    });
}
function endTransform(e){
    const note  = document.querySelector(`.piano-key[data-letter="${e.code[e.code.length-1]}"]`);
    if(!note)return; 
    note.classList.remove('piano-key-active');

}

lettersButton.addEventListener('click', makeLettersActive);
notesButton.addEventListener('click', makeNotessActive);
fullScreenButton.addEventListener('click', toggleFullScreen);
window.addEventListener('keydown', audioPlayByKeyboard);
window.addEventListener('keyup', endTransform);
piano.addEventListener('mousedown', audioPlayByClick);
piano.addEventListener('mouseup', stopPlayingByClick)

