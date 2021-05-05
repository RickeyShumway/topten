import { createContext, useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faSpotify, faImdb } from '@fortawesome/free-brands-svg-icons';
import { faThList, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
const youtubeIcon = <FontAwesomeIcon icon={faYoutube} />
const spotifyIcon = <FontAwesomeIcon icon={faSpotify} />
const imdbIcon = <FontAwesomeIcon icon={faImdb} />
const emptyImage = <FontAwesomeIcon icon={faUserCircle} />
const GlobalContext = createContext();
export const useGlobalContext = () => {
    return useContext(GlobalContext);
}
export class Profile {
    constructor({name, email, id}) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.urls = [];
        this.iframes = ['<iframe width="560" height="315" src="https://www.youtube.com/embed/ZRd3lrukxu8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>']
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
        let newState={...state};
        let id = uuidv4();
        let newPerson = new Profile({...user, id});
        newState.profiles.push(newPerson);
        newState.selectedProfile = newPerson;
        newState.userProfile = newPerson;
        setState(newState);
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
    useEffect(()=> {
        addPerson({name:'jon', email:'uuuu@gmail.com'})
        addPerson({name:'kyle', email:'ff'})

    },
    []
    )
    return (
        <GlobalContext.Provider value={{
            state,
            addPerson,
            userLogin,
            selectProfile,
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