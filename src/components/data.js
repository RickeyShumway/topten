import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faSpotify, faImdb } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
const youtubeIcon = <FontAwesomeIcon icon={faYoutube} />
const spotifyIcon = <FontAwesomeIcon icon={faSpotify} />
const imdbIcon = <FontAwesomeIcon icon={faImdb} />
const emptyImage = <FontAwesomeIcon icon={faUserCircle} />

export class Profile {
    constructor(name) {
        this.name = name;
        this.youtube = true;
        this.urls = [];
        this.pic = emptyImage;
    }
    addUrl(url, index) {
        this.urls.splice(index, 1, url);
    }
    editName(newName) {
        this.name = newName;
    }
    
}
const app = {
    name: 'Top Ten',
    medias: ['Youtube, Spotify, IMBD'],
    icons: [youtubeIcon, spotifyIcon, imdbIcon],
    profiles: [],

}