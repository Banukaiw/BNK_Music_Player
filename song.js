document.addEventListener('DOMContentLoaded', function() {
    fetch('songs.json')
        .then(response => response.json())
        .then(data => {
            displaySongs(data.songs);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function displaySongs(songs) {
    const songList = document.getElementById('song-list');
    songs.forEach(song => {
        const songItem = document.createElement('div');
        songItem.classList.add('song-item');
        
        const img = document.createElement('img');
        img.src = song.image;
        img.alt = `${song.title} cover image`;

        const textContainer = document.createElement('div');

        const title = document.createElement('h2');
        title.textContent = song.title;
        
        const artist = document.createElement('p');
        artist.textContent = `Artist: ${song.artist}`;
        
        textContainer.appendChild(title);
        textContainer.appendChild(artist);

        songItem.appendChild(img);
        songItem.appendChild(textContainer);
        songList.appendChild(songItem);
    });
}
