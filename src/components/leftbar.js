import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faSpotify, faImdb } from '@fortawesome/free-brands-svg-icons';

const youtubeIcon = <FontAwesomeIcon icon={faYoutube} />
const spotifyIcon = <FontAwesomeIcon icon={faSpotify} />
const imdbIcon = <FontAwesomeIcon icon={faImdb} />

let webs = [youtubeIcon, spotifyIcon, imdbIcon];
export default function LeftBar() {
    return <div class="left-bar">
        <SocialList website={[...webs]}/>
    </div>
}
function revealSocial(message) {
    console.log(message);
}
function SocialList(props) {
    
    return(
        <div className="social-list">
            {props.website.map(thing => <Social web={thing} click={()=>revealSocial(thing)}/>)}
        </div>
    )
}
function Social(props) {
    return(
        <div className="social-button" onClick={props.click}>
            {props.web}
        </div>
    )
}