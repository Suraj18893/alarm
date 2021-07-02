console.log(`hello`);

var audio = new Audio('nice_alarm_sound.mp3')
// audio.play();

function alarmplay() {
    audio.play()
}

function show(type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Messge:</strong> ${displayMessage}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">×</span>
    </button>
    </div>`;
    setTimeout(function () {
        message.innerHTML = ''
    }, 5000);
}

// alarm()

document.getElementById('alarmSubmit').addEventListener('click', setAlarm);

function setAlarm(e) {

    e.preventDefault();
    // console.log(`we are inside function`);
    const alarm = document.getElementById('meetingtime');
    let alarmDate = new Date(meetingtime.value);
    let now = new Date();
    

    let timetoalarm = alarmDate - now;
    console.log(timetoalarm)
    if (timetoalarm >= 0) {
        setTimeout(() => {
            alarmplay();
        }, timetoalarm);
        show('success', 'Your alarm have been successfully set')

        setInterval(() => {
            document.getElementById('alarmSubmit').innerText = `Pause`
            document.getElementById('alarmSubmit').addEventListener('click', function(){
                audio.pause();
                show('success', 'Your alarm have been successfully paused')
                setTimeout(() => {
                    location.reload();
                }, 5000);
            })

        }, timetoalarm);
    }
    else{
        show('danger', 'Please select an appropriate date and time')
    }


    

}
