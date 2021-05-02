import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Divider } from '@material-ui/core';
import { Route, Link, Switch } from 'react-router-dom';
const emptyImage = <FontAwesomeIcon size='100px' icon={faUserCircle} />
export function ProfileList(props) {
    let profArr = props.profiles;
    console.log(profArr[0].name)
    return (
        <div className='profile-list'>
            {profArr.map(item => <Profile user={item} />)}
        </div>
    )
}
function goProfile() {

}
export function Profile(props) {
    console.log()
    return (
        <Link to='/pubprofile'>
        <div className='profile-wrap'>
        <div className='profile' id={props.user.id} onClick={()=>console.log('youclickedme')}>
                <div className='profile-pic'>{props.user.pic}</div>
                <div className='profile-name'>{props.user.name}</div>
            </div>
            </div>
            </Link>    
    )
}


// export default function ProfileList(props) {
//     let profArr = props.profiles;
//     console.log(profArr[0].name)
//     return (
//         <div className='profile-list'>
//             {profArr.map(item => <div className='profile' id={item.id} onClick={()=>console.log('youclickedme')}>
//                 <div className='profile-pic'>{item.pic}</div>
//                 <div className='profile-name'>{item.name}</div>
//                 </div>)}
//         </div>
//     )
// }
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