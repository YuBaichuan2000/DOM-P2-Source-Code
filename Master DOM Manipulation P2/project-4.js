const btn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');
let time = document.querySelector('#timer');
let timeElapsed;


let counter = 0;
let started = false;

resetBtn.addEventListener('click', ()=>{
    resetCounter();
})

btn.addEventListener('click', ()=>{
    if (!started){
        started = true;
        timeElapsed = window.setInterval(increment, 1000);
        btn.innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>'
    }
    else{
        started = false;
        window.clearInterval(timeElapsed);
        btn.innerHTML = '<i class="fa-solid fa-play" id="play"></i>'
    }
})
function increment(){
    counter++;
    time.innerText = formatTime(counter);
}

function formatTime(counter){
    let hrs = Math.floor(counter / 3600);
    let mins = Math.floor((counter % 3600) / 60);
    let secs = Math.floor(((counter % 3600) % 60));

    hrs = String(hrs).padStart(2, '0');
    mins = String(mins).padStart(2, '0');
    secs = String(secs).padStart(2, '0');

    return `${hrs}:${mins}:${secs}`;
}

let resetCounter = () => {
    counter = 0;
    started = false;
    time.innerText = '00:00:00';
}
