import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faSpotify, faImdb } from '@fortawesome/free-brands-svg-icons';

const youtubeIcon = <FontAwesomeIcon icon={faYoutube} />
const spotifyIcon = <FontAwesomeIcon icon={faSpotify} />
const imdbIcon = <FontAwesomeIcon icon={faImdb} />

export default function Heading(props) {
    return (
        <div className="heading">
            {props.heading}
        </div>
    )
}