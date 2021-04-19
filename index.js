const timeLeftDisplay = document.querySelector('#time-left')
const startBtn = document.querySelector('#start-button')
timeLeft = 60;

function countDown(){
    setInterval(() => {
        if (timeLeft <= 0){
            clearInterval(timeLeft = 0)
        }
        timeLeftDisplay.innerHTML = timeLeft + ' secs'
        if (timeLeft === 0){
            timeLeftDisplay.innerHTML = timeLeft
        }

        timeLeft -= 1
    }, 1000)
}

startBtn.addEventListener('click', countDown)
