import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Divider } from '@material-ui/core';
import { Route, Link, Switch } from 'react-router-dom';
import {useGlobalContext } from './data';
import {useState, useRef } from 'react';
const emptyImage = <FontAwesomeIcon size='100px' icon={faUserCircle} />

export function ProfileList(props) {
    const {state:{profiles}} = useGlobalContext();
    const [state, setState] = useState();
    let profArr = profiles;
    
    return (
        <div className='profile-list'>
            {profArr.map(item => <Profile user={item} />)}
        </div>
    )
}

export function Profile(props) {
    const {selectProfile, state:{selectedProfile, profiles}} = useGlobalContext();
    const [state, setState] = useState();
    function clickProfile(e) {
        let newState={...state};
        let id = e.target.id;
        console.log('you clicked', id)
        let newSelection = profiles.find(profile => profile.id === id);
        //setState(newSelection);
        selectProfile(newSelection)
        console.log('aftercahnge',selectedProfile)
    }
    return (
        <Link to='/pubprofile'>
        <div className='profile-wrap'>
        <div className='profile' id={props.user.id} onClick={clickProfile}>
                <div onClick={clickProfile} className='profile-pic'>{props.user.pic}</div>
                <div onClick={clickProfile} className='profile-name'>{props.user.name}</div>
            </div>
            </div>
            </Link>    
    )
    // return (
    //     <Link to='/pubprofile'>
    //     <div className='profile-wrap'>
    //     <div className='profile' id={props.user.id} onClick={clickProfile}>
    //             <div onClick={clickProfile} className='profile-pic'>{props.user.pic}</div>
    //             <div onClick={clickProfile} className='profile-name'>{props.user.name}</div>
    //         </div>
    //         </div>
    //         </Link>    
    // )
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