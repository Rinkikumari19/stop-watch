let hours = 0;
let minutes = 0;
let second = 0;

let displayHours = 0;
let displayMinutes = 0;
let displaySecond = 0;

let interval = null;
let status = 'stopped';

function stopWatch(){
    second++;
    if(second/60===1){
        second = 0;
        minutes++;
        if(minutes/60===1){
            minutes = 0;
            hours++;
        }
    }
    if(second<10){
        displaySecond = '0' + second.toString();
    }else{
        displaySecond = second;
    }

    if(minutes<10){
        displayMinutes = '0' + minutes.toString();
    }else{
        displayMinutes = minutes;
    }

    if(hours<10){
        displayHours = '0' + hours.toString();
    }else{
        displayHours = hours;
    }

    document.getElementById('stop-watch').innerHTML = displayHours + ":" + displayMinutes + ":" + displaySecond
}



function startStop(){
    if(status==='stopped'){
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStop').innerHTML = 'stop';
        status = 'started';
    }else{
        window.clearInterval(interval);
        document.getElementById('startStop').innerHTML = 'start';
        status = 'stopped';
    }
}

function reset(){
    window.clearInterval(interval);
    hours = 0;
    minutes = 0;
    second = 0;
    document.getElementById('stop-watch').innerHTML = '00:00:00';
    document.getElementById('startStop').innerHTML = 'start';

}