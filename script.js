console.log(`hello`);

var audio = new Audio('nice_alarm_sound.mp3')
// audio.play();

function alarmplay(){
    audio.play()
}

// alarm()

document.getElementById('alarmSubmit').addEventListener('click', setAlarm);

function setAlarm(e){
    
    e.preventDefault();
    // console.log(`we are inside function`);
    const alarm = document.getElementById('meetingtime');
    let alarmDate = new Date(meetingtime.value);
    let now = new Date();

    let timetoalarm = alarmDate - now;
    console.log(timetoalarm)
    if(timetoalarm>=0){
        setTimeout(() => {
            alarmplay();
        }, timetoalarm);
    }
}