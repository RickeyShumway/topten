import { createContext, useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faSpotify, faImdb } from '@fortawesome/free-brands-svg-icons';
import { faThList, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import fetchYoutube from './youtube.js';
const youtubeIcon = <FontAwesomeIcon icon={faYoutube} />
const spotifyIcon = <FontAwesomeIcon icon={faSpotify} />
const imdbIcon = <FontAwesomeIcon icon={faImdb} />
const emptyImage = <FontAwesomeIcon icon={faUserCircle} />
const GlobalContext = createContext();
export const useGlobalContext = () => {
    return useContext(GlobalContext);
}
let testArr = ['https://www.youtube.com/watch?v=y1hWi-vgoaU','https://www.youtube.com/watch?v=1_qHb40iq64', 'https://www.youtube.com/watch?v=nZ67YBF3qRc','https://www.youtube.com/watch?v=adKEqin5SoI']
export class Profile {
    constructor({name, email, id}) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.videos=[];
        this.urls = ['https://www.youtube.com/watch?v=M3Dm9zDnOyE'];
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
    media: ['Youtube, Spotify, IMBD'],
    icons: [youtubeIcon, spotifyIcon, imdbIcon],
    profiles: [],
    selectedProfile: new Profile({name:'TestMan', id:324234}),
    userProfile:null,
}
export const GlobalProvider = (props) => {
    const [state, setState] = useState(appData)
    const addPerson = function(user) {
        console.log(user)
        if(user.name && user.email && user.password) {
            let newState={...state};
            let id = uuidv4();
            let newPerson = new Profile({...user, id});
            newState.profiles.push(newPerson);
            newState.selectedProfile = newPerson;
            newState.userProfile = newPerson;
            setState(newState);
        } else {
            console.log('please fill out all the fields')
        }
    }
    const userLogin = function(username, password) {
        let newState={...state}
        if(username && password) {
            const userProfile = state.profiles.find(profile=> profile.email === username)
            if(userProfile) {
                newState.userProfile = userProfile;
                console.log('newState',newState)
                setState(newState);
            } else {
                console.log('could not find username or password')
            }
        }
    };
    const selectProfile = function(id) {
        let newState={...state};
        let data = newState.profiles.find(profile => profile.id === id)
        newState.selectedProfile = data;
        setState(newState);
    }
    const  addVideo = async function(url, index) {
        let newState={...state};
        newState.selectedProfile.urls[index] = url;
        let data = await fetchYoutube(url);
        console.log(data)
        newState.selectedProfile.videos[index] =  await data;
        await setState(newState);
        await console.log(state.selectedProfile.urls)
    }
    useEffect(()=> {
        addPerson({name:'jon', email:'uuuu@gmail.com',password:'jjjjjj'})
        addPerson({name:'kyle', email:'ff',password:'jjjjjj'})

    },
    []
    )
    return (
        <GlobalContext.Provider value={{
            state,
            addPerson,
            userLogin,
            selectProfile,
            addVideo,
        }}>{props.children}</GlobalContext.Provider>
        )
    }
// addPerson: function(chee) {
//                 let id = uuidv4();
//                 let newPerson = new Profile(chee, id);
//                 this.profiles.push(newPerson);
//                 this.selectProfile(0);
//                 this.adminProf(0);
//             }