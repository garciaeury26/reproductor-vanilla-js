const banner = document.getElementById("banner");
let song = document.getElementById("song") // esta tiene los metos de reproducion
let audio = document.getElementById("audio") // esta es la etique que tiere srcs
const songName = document.getElementById("song__name")
let counter = 0;

const btnPlay = document.getElementById("play");
let playState = false;
const btnBack = document.getElementById("back")
const btnNext = document.getElementById("next")

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

btnPlay.addEventListener("click", () => {
    if (!playState) {
        playState = !playState
        btnPlay.className = "pointer bx bx-pause-circle bx-md bx-tada"

        song.play();
        console.log(song)
    } else {
        playState = !playState
        btnPlay.className = "pointer bx bx-play-circle bx-md bx-tada"
        song.pause()
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



