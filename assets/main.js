const btnPlay = document.getElementById("play");
let playState = false;
const cornerstone = document.getElementById("cornerstone");

btnPlay.addEventListener("click",()=>{
    if(!playState){
        playState = !playState
        btnPlay.className = "pointer bx bx-pause-circle bx-md bx-tada"
        cornerstone.play();
    }else{
        playState = !playState
        btnPlay.className = "pointer bx bx-play-circle bx-md bx-tada"
        cornerstone.pause()
    }
});

