import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
const emptyImage = <FontAwesomeIcon icon={faUserCircle} />
export default function Profile() {
    return (
        <div className='profile'>
            <div className="pic">
            {emptyImage}
            </div>
            <div className="profile-name">
                Rickey Shumway
            </div>
        </div>
    )
}