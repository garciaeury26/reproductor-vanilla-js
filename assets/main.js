const banner = document.getElementById("banner"); // portada de imagen

// esta tiene los metos de reproducion
let song = document.getElementById("song")
let song2 = document.getElementById("song2")
let song3 = document.getElementById("song3")

// esta es la etique que tiere src
let audio = document.getElementById("audio")
let audio2 = document.getElementById("audio2")

const songName = document.getElementById("song__name")

let counter = 0;

const btnPlay = document.getElementById("play");
const btnPlay2 = document.getElementById("play2");
const btnPlay3 = document.getElementById("play3");

let playState = false;
const btnBack = document.getElementById("back")
const btnNext = document.getElementById("next")

// playlist que se esta reproduciendo
let musisPlayin1 = false;
let musisPlayin2 = false;
let musisPlayin13 = false;

const songs = [
    {
        songName: "mardy Bum",
        file: "./assets/audio/Mardy Bum.mp3",
        img: "./assets/images/mardy-bum.jfif"
    },
    {
        songName: "sunflower",
        file: "./assets/audio/Post Malone Swae Lee  Sunflower SpiderMan Into the SpiderVerse.mp3",
        img: "./assets/images/sunflower.jfif"
    },
    {
        songName: "aneurysm",
        file: "./assets/audio/Nirvana  Aneurysm Live At The Paramount Seattle  1991.mp3",
        img: "./assets/images/aneurysm.jfif"
    },
    {
        songName: "cornerstone",
        file: "./assets/audio/Arctic Monkeys  Cornerstone Official Video.mp3",
        img: "./assets/images/cornerstone.jfif"
    },
    {
        songName: "playa",
        file: "./assets/audio/Myke Towers  La Playa Video Oficial.mp3",
        img: "./assets/images/cuenta.jfif"
    },
    {
        songName: "company",
        file: "./assets/audio/Justin Bieber  Company Official Music Video.mp3",
        img: "./assets/images/company.jfif"
    },
]



btnPlay.addEventListener("click", (e) => {
    song2.pause();
    song3.pause();
    btnPlay2.className = "pointer bx bx-play-circle bx-md bx-tada"
    btnPlay3.className = "pointer bx bx-play-circle bx-md bx-tada"


    if (!playState) {
        playState = !playState
        btnPlay.className = "pointer bx bx-pause-circle bx-md bx-tada"

        song.play();
        console.log(e)
    } else {
        playState = !playState
        btnPlay.className = "pointer bx bx-play-circle bx-md bx-tada"
        song.pause()
    }

});

btnPlay2.addEventListener("click", (e) => {
    song.pause();
    song3.pause();    
    btnPlay.className = "pointer bx bx-play-circle bx-md bx-tada"
    btnPlay3.className = "pointer bx bx-play-circle bx-md bx-tada"

    if (!playState) {
        playState = !playState
        btnPlay2.className = "pointer bx bx-pause-circle bx-md bx-tada"

        song2.play();
        console.log(e)
    } else {
        playState = !playState
        btnPlay2.className = "pointer bx bx-play-circle bx-md bx-tada"
        song2.pause()


    }
});

btnPlay3.addEventListener("click", (e) => {
    song.pause();
    song2.pause();
    btnPlay.className = "pointer bx bx-play-circle bx-md bx-tada"
    btnPlay2.className = "pointer bx bx-play-circle bx-md bx-tada"

    if (!playState) {
        playState = !playState
        btnPlay3.className = "pointer bx bx-pause-circle bx-md bx-tada"

        song3.play();
        console.log(e)
    } else {
        playState = !playState
        btnPlay3.className = "pointer bx bx-play-circle bx-md bx-tada"
        song3.pause()

    }
});



btnNext.addEventListener("click", () => {
    counter++;
    const songToplayer = songs.find((current, index) => index === counter + 1);

    banner.attributes[1].value = songToplayer.img
    songName.innerText = songToplayer.songName;

    btnPlay.className = "pointer bx bx-play-circle bx-md bx-tada"

    // audio.attributes[1].value = songToplayer.file

    // Cambiar el valor del atributo de un elemento HTML - no funciono
    // audio.setAttribute("src",songToplayer.file); 

    //este si funciona / mmg👌
    document.getElementById("song").src = songToplayer.file;
});



btnBack.addEventListener("click", () => {
    let songToplayer;
    if (counter > 0) {
        counter--;
        songToplayer = songs.find((current, index) => index === counter);

        banner.attributes[1].value = songToplayer.img
        songName.innerText = songToplayer.songName;

        btnPlay.className = "pointer bx bx-play-circle bx-md bx-tada"

        // audio.attributes[1].value = songToplayer.file

        // Cambiar el valor del atributo de un elemento HTML - no funciono
        // audio.setAttribute("src",songToplayer.file); 

        //este si funciona / mmg👌
        document.getElementById("song").src = songToplayer.file;
    }


});



