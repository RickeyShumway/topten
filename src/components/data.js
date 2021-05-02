import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faSpotify, faImdb } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
const youtubeIcon = <FontAwesomeIcon icon={faYoutube} />
const spotifyIcon = <FontAwesomeIcon icon={faSpotify} />
const imdbIcon = <FontAwesomeIcon icon={faImdb} />
const emptyImage = <FontAwesomeIcon icon={faUserCircle} />

export class Profile {
    constructor(name, id) {
        this.name = name;
        this.id = id;
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
export const appData = {
    name: 'Top Ten',
    medias: ['Youtube, Spotify, IMBD'],
    icons: [youtubeIcon, spotifyIcon, imdbIcon],
    profiles: [],
    selectedProfile:null,
    adminProfile:null,
    addPerson: function(chee) {
        let id = uuidv4();
        let newPerson = new Profile(chee, id);
        this.profiles.push(newPerson);
        this.selectProfile(0);
        this.adminProf(0);
    },
    adminProf: function(index) {
        this.adminProfile = this.profiles[index];
    },
    selectProfile: function(index) {
        this.selectedProfile = this.profiles[index];
    },
}