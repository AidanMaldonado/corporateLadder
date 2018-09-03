//DOM Vars

//Buttons
const startBtn = document.querySelector('.btn-start');
const afterStart = document.querySelector('.after-start');
const moneyUI = document.querySelector('.money');
const workBtn = document.querySelector('.btn-work');
const statsBtn = document.querySelector('.btn-stats');

let jobLevel = 1;
let money = 0;

//Classes
class Game {
    static onLoad() {
        afterStart.style.display = 'none';
    }

    static startGame() {
        startBtn.style.display = 'none';

        afterStart.style.display = 'block';
    }

    static updateUI() {
        moneyUI.textContent = money;

        if(jobLevel === 1) {
            jobLevel.textContent = "Office Worker";
        }
    }
}

class UI {
    work() {
        for(let i = 1; i <= 5; i++) {
            if(jobLevel === i) {
                money += (100 * i);
            }
        }
    }
}

//EVENT LISTENERS
window.addEventListener('load', Game.onLoad);

startBtn.addEventListener('click', Game.startGame);

workBtn.addEventListener('click', UI.work);

statsBtn.addEventListener('click', Game.updateUI);







