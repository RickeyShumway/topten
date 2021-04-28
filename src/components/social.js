import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faSpotify, faImdb } from '@fortawesome/free-brands-svg-icons';

const youtubeIcon = <FontAwesomeIcon icon={faYoutube} />
const spotifyIcon = <FontAwesomeIcon icon={faSpotify} />
const imdbIcon = <FontAwesomeIcon icon={faImdb} />



export default function SocialList() {
    // let sites=["YouTube", "Spotify", "IMBD"];
    let sites=[youtubeIcon, spotifyIcon, imdbIcon];
    return(
        <div className="social-list">
            {sites.map(thing => <Social web={thing} click={()=>console.log(`hello this is ${thing}`)}/>)}
        </div>
        // <div className="social-list">
        //     <Social web={site} click={()=>console.log(`hello this is ${site}`)}/>
        // </div>
    )
}

// function Social(props) {
//     return(
//         <div className="social-button">
//             {props.web}
//         </div>
//     )
// }

function Social(props) {
    return(
        <div className="social-button" onClick={props.click}>
            {props.web}
        </div>
    )
}