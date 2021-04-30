import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Divider } from '@material-ui/core';
const emptyImage = <FontAwesomeIcon size='100px' icon={faUserCircle} />
export default function Profile(props) {
    let profArr = props.profiles;
    console.log(profArr[0].name)
    return (
        <div className='profile-list'>
            {profArr.map(item => <div className='profile'>
                <div className='profile-name'>{item.pic}</div>
                <div className='profile-pic'>{item.name}</div>
                </div>)}
        </div>
    )
}


// <div className='profile'>
//     <div className="pic">
//     {emptyImage}
//     </div>
//     <div className="profile-name">
//         Rickey Shumway
//     </div>
//</div>
//)
/* <div className='profile'>
           {profArr.map(function(item) {
               return(
                   <div className='profile-name'>
                       {profArr.name}</div>)
        </div>)} */