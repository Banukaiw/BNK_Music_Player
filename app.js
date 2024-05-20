const music = new Audio('vande.mp3');
/* music.play(); */

const songs = [ 
    {
        id:'1',
        songName:`On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"images/01.jpg"
    },
    {
        id:'2',
        songName:`Alan Walker Fade<br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"images/02.jpg"
    },
    {
        id:'3',
        songName:`Asai Oyawa<br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"images/03.jpg"
    },
  
    {
        id:'4',
        songName:`Windanaya<br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"images/04.jpg"
    },
    {
        id:'5',
        songName:`Mal Osariya<br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"images/05.jpg"
    },
    {
        id:'6',
        songName:`Who I am<br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"images/06.jpg"
    },
    {
        id:'7',
        songName:`Darkside<br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"images/07.jpg"
    },
    {
        id:'8',
        songName:`Oba Wenuwen<br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"images/08.jpg"
    },
    {
        id:'9',
        songName:`Alan Walker Fade<br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"images/02.jpg"
    }

]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById('masterPlay');
masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime <=0){
        music.play();

    }else{
        music.pause();
    }
})