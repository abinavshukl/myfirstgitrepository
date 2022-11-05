console.log('hi')

let songIndex = 0;

let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.querySelector('#masterPlay');
let progressBar = document.querySelector('#progressBar');
let gif1 = document.querySelector('#gif1');
let songItem = Array.from(document.querySelectorAll('.songItem'));




let songs = [
    { songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg" },
    { songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg" },
    { songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg" },
    { songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg" },
    { songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg" },
]


songItem.forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].coverPath;
    let song = document.querySelectorAll('.songName');
    let songNameCount = 0;
    for (let i of song) {
        i.innerHTML = songs[songNameCount].songName;
        songNameCount++;
    }
})

masterPlay.addEventListener('click', () => {
    // alert('ram')
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif1.style.opacity = 1;

    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle');
        gif1.style.opacity = 0;

    }
})


audioElement.addEventListener('timeupdate', () => {
    // console.log("timeupdate");
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;
})

progressBar.addEventListener('change', () => {
    audioElement.currentTime = audioElement.value * audioElement.duration / 100;
})



let playMusic = Array.from(document.querySelectorAll('.playMusic'));
playMusic.forEach((element) => {
    element.addEventListener('click', (e) => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            songIndex = parseInt(e.target.id);
            audioElement.src = `songs/${songIndex}.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif1.style.opacity = 1;

        } else {
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle')
            masterPlay.classList.add('fa-play-circle');
            gif1.style.opacity = 0;

        }
    })
})
let marsterText = document.querySelector('#marsterText');


document.querySelector('#privious').addEventListener('click', () => {
    if (songIndex <= 0) {

        songIndex = 0;
    } else {
        songIndex -= 1;

    }
    audioElement.src = `songs/${songIndex}.mp3`;
    marsterText.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif1.style.opacity = 1;
})
document.querySelector('#next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    marsterText.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif1.style.opacity = 1;
})






