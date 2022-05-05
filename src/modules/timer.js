const timer =(deadLine)=>{
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');
    let timerId = null;
    
    const getTimeRemaining = () =>{        
        
        let dateStop = new Date(deadLine).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;

        let hours = Math.floor(timeRemaining/60/60);
        let minutes = Math.floor((timeRemaining/60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        if (timeRemaining <= 0) {
            clearInterval(timerId);
            hours = '00';
            minutes = '00';
            seconds = '00';
        }

        return {
            timeRemaining: timeRemaining,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        }
        
    }

    const updateClock = () =>{
        let getTime = getTimeRemaining();
        
        
        timerHours.textContent = getTime.hours;
        timerMinutes.textContent = getTime.minutes;
        timerSeconds.textContent = getTime.seconds;
    }
    updateClock();
    timerId = setInterval(updateClock, 1000)
    
}
export default timer
