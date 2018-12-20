const consumerKey = "pEsOuXarSDrqtXwQANUc";
const consumerSecret = "GsOSjuWcLHhVHnFKUMPFgITJLaqMhihk";

function getArtist (artistName) {
    return fetch(`https://api.discogs.com/database/search?q=${artistName}&key=${consumerKey}&secret=${consumerSecret}`)
        .then(res => res.json())
        .catch(error => console.log(error));
}


const addArtist = (imgUrl) => {
    
    document.getElementById('artists').innerHTML += `
    <div class="col-sm-4">
            <div>
                <img src="${imgUrl}" />
            </div>
        </div>
    `
}


async function addArtistToDom(artistName) {

   const artistInfo = await getArtist(artistName);
   const artistObj = Object.values(artistInfo)[1];
   
   document.getElementById('artists').innerHTML = "";

   artistObj.forEach((artist) => {
       console.log(artist.cover_image);
       addArtist(artist.cover_image);
    });
}

document.getElementById('artist-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const artistName = document.getElementById('artist-title').value;
    addArtistToDom(artistName);
});

