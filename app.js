//const music = new Audio('Dzanum.mp3');
//music.play(); 




const music = new Audio('Shaheena.mp3');
//let music = new Audio('path/to/your/music/file.mp3');
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];
masterPlay.addEventListener('click',()=>{
    
    if(music.paused || music.currentTime <=0){
        music.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        wave.classList.add('active2');
        

    }else{
        music.pause();
        masterPlay.classList.add('fa-play');
        masterPlay.classList.remove('fa-fa-pause');
        wave.classList.remove('active2');
    }
}) 

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((element)=>{
        
            element.classList.add('fa-circle-play');
            element.classList.remove('fa-circle-pause');
        
    }) ;
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playlistPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        music.src = `audio/${index}.mp3`
        poster_master_play.src = `images/${index}.jpg`;
        music.play();
    });
}) ;


const songs = [ 
    {
        id:'1',
        songName:`On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"images/1.jpg"
    },
    {
        id:'2',
        songName:`Alan Walker Fade<br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"images/2.jpg"
    },
    {
        id:'3',
        songName:`Asai Oyawa<br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"images/3.jpg"
    },
  
    {
        id:'4',
        songName:`Windanaya<br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"images/4.jpg"
    },
    {
        id:'5',
        songName:`Mal Osariya<br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"images/5.jpg"
    },
    {
        id:'6',
        songName:`Who I am<br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"images/6.jpg"
    },
    {
        id:'7',
        songName:`Darkside<br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"images/7.jpg"
    },
    {
        id:'8',
        songName:`Oba Wenuwen<br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"images/8.jpg"
    },
    {
        id:'9',
        songName:`Alan Walker Fade<br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"images/5.jpg"
    }

]

 Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
}) 



