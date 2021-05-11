import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Divider } from '@material-ui/core';
import { Route, Link, Switch, useHistory, Redirect } from 'react-router-dom';
import {useGlobalContext } from './data';
import {useState, useRef } from 'react';
const emptyImage = <FontAwesomeIcon size='100px' icon={faUserCircle} />


export function ProfileList() {
    const {state:{profiles, userProfile}} = useGlobalContext();
    const [state, setState] = useState();
    let profArr = profiles;
    
    return (
        <div className='profile-list'>
            {profArr.map((item) => {
            if(item == userProfile) {
                return <Profile key={userProfile.id} user={item} userPro={true}/>
            } else {
                return <Profile key={userProfile.id} user={item} />
            }
            }
            
            )}
        </div>
    )
}


export function Profile(props) {
    const {selectProfile, state:{selectedProfile, userProfile}} = useGlobalContext();
    const [state, setState] = useState();
    const [redirect, setRedirect]= useState();
    const history = useHistory();
    let profile = props.user;
    function clickProfile(e) {
        console.log('you clicked', profile)
        const newSelection = profile.id;
        console.log('newselection',newSelection)
        selectProfile(newSelection)
       
    }
    function renderPic() {
        if(profile.pic === null) {
            return <FontAwesomeIcon icon={faUserCircle} />
        } else {
            return <img src={profile.pic} />
        }
    }
    
    // if(redirect) {
    //     console.log(redirect)
    //     return <Redirect to={redirect}/>
    // }
    if(props.userPro) {
        return (
            <Link to={`/admin/${profile.id}`}>
            <div className='profile-wrap'>
            <div onClick={clickProfile} className='profile'>
                    <div onClick={clickProfile} className='profile-pic'>{renderPic()}</div>
                    <div onClick={clickProfile} className='profile-name'>{profile.name}</div>
                </div>
                </div>
                </Link>
        )
    }
    else{
    return (
        <Link to={`/pubprofile/${profile.id}`}>
        <div className='profile-wrap'>
        <div onClick={clickProfile} className='profile'>
                <div onClick={clickProfile} className='profile-pic'>{renderPic()}</div>
                <div onClick={clickProfile} className='profile-name'>{profile.name}</div>
            </div>
            </div>
            </Link>
   
    )
    }
//     return (
//         <Link to='/pubprofile'>
//         <div className='profile-wrap'>
//         <div className='profile' id={props.user.id} onClick={clickProfile}>
//                 <div onClick={clickProfile} className='profile-pic'>{props.user.pic}</div>
//                 <div onClick={clickProfile} className='profile-name'>{props.user.name}</div>
//             </div>
//             </div>
//             </Link>    
//     )
}
// export function Profile(props) {
//     const {selectProfile, state:{selectedProfile, userProfile}} = useGlobalContext();
//     const [state, setState] = useState();
//     const history = useHistory();
//     let profile = props.user;
//     function clickProfile(e) {
//         console.log('you clicked', profile)
//         let newSelection = profile.id;
//         selectProfile(newSelection)
//         if(selectedProfile == userProfile) {
//             history.push("/admin");
//         } else {
//             history.push('/pub-profile')
//         }
//     }
//     if(selectedProfile == userProfile) {
//         return (
//             <Link to='/admin'>
//             <div className='profile-wrap'>
//             <div className='profile' onClick={clickProfile}>
//                     <div onClick={clickProfile} className='profile-pic'>{profile.pic}</div>
//                     <div onClick={clickProfile} className='profile-name'>{profile.name}</div>
//                 </div>
//                 </div>
//                 </Link>
//         )
//     }
//     else{
//     return (
//         <Link to='/pubprofile'>
//         <div className='profile-wrap'>
//         <div className='profile' onClick={clickProfile}>
//                 <div onClick={clickProfile} className='profile-pic'>{profile.pic}</div>
//                 <div onClick={clickProfile} className='profile-name'>{profile.name}</div>
//             </div>
//             </div>
//             </Link>
   
//     )
//     }
//     return (
//         <Link to='/pubprofile'>
//         <div className='profile-wrap'>
//         <div className='profile' id={props.user.id} onClick={clickProfile}>
//                 <div onClick={clickProfile} className='profile-pic'>{props.user.pic}</div>
//                 <div onClick={clickProfile} className='profile-name'>{props.user.name}</div>
//             </div>
//             </div>
//             </Link>    
//     )
// }


// export function Profile(props) {
//     const {selectProfile, state:{selectedProfile, userProfile}} = useGlobalContext();
//     const [state, setState] = useState();
//     const history = useHistory();
//     let profile = props.user;
//     function clickProfile(e) {
//         console.log('you clicked', profile)
//         let newSelection = profile.id;
//         selectProfile(newSelection)
//         if(selectedProfile == userProfile) {
//             history.push("/admin");
//         } else {
//             history.push('/pubprofile')
//         }
//     }
//         return (
           
//             <div className='profile-wrap'>
//             <div className='profile' onClick={clickProfile}>
//                     <div onClick={clickProfile} className='profile-pic'>{profile.pic}</div>
//                     <div onClick={clickProfile} className='profile-name'>{profile.name}</div>
//                 </div>
//                 </div>
//         )  
//     }
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