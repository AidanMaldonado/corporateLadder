//DOM Vars

//Div
const afterStart = document.querySelector('.after-start');
const beforeStart = document.querySelector('.before-start');
const audioDiv = document.querySelector('.audio-section');

//Buttons
const startBtn = document.querySelector('.btn-start');
const audioBtn = document.querySelector('.btn-audio-toggle');
const moneyUI = document.querySelector('.money');
const jobUI = document.querySelector('.job-title');
const workBtn = document.querySelector('.btn-work');
const statsBtn = document.querySelector('.btn-stats');
//Audio
const audio = document.querySelector('#audio');

//Game Variables
let jobLevel = 1;
let money = 0;
let audioValue = 1;

//ClASSES
class Game {
    //Hides layout on load, shows menu
    static onLoad() {
        afterStart.style.display = 'none';
    }

    //Shows layout on start, hides menu
    static startGame() {
        beforeStart.style.display = 'none';

        afterStart.style.display = 'block';
    }

    //Toggles audio on and off for game
    static audioToggle() {
        if (audioBtn.textContent === 'Audio: On') {
            Game.toggleFunc('Audio: Off', 'btn btn-danger');
            
            audioValue = 0;
        } else {
            Game.toggleFunc('Audio: On', 'btn btn-success');

            audioValue = 1;
        }
    }

    static toggleFunc (text, className) {
    audioBtn.textContent = text;
    audioBtn.className = className;
    }

    //Plays audio if audio toggle is on
    static playAudio () {
        if(audioValue === 1) {
            audio.play();
        } 
    }

    //Updates the UI when Stats button is clicked
    static updateUI() {
        moneyUI.textContent = money;

        if (jobLevel === 1) {
            jobUI.textContent = "Office Worker";
        } else if (jobLevel === 2) {
            jobUI.textContent = "Manager";
        } else if (jobLevel === 3) {
            jobUI.textContent = "Supervisor";
        } else if (jobLevel === 4) {
            jobUI.textContent = "VP";
        } else {
            jobUI.textContent = "CEO";
        }
    }
}

class UI {
    static work() {
        //Calculates pay for job
        for(let i = 1; i <= 5; i++) {
            if(jobLevel === i) {
                money += (100 * i);
            }
        }

        //Plays audio
        Game.playAudio();
    }
}

//EVENT LISTENERS
window.addEventListener('load', Game.onLoad);

startBtn.addEventListener('click', Game.startGame);

workBtn.addEventListener('click', UI.work);

statsBtn.addEventListener('click', Game.updateUI);

audioBtn.addEventListener('click', Game.audioToggle);




