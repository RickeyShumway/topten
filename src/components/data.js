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
let testArr = ['https://www.youtube.com/watch?v=y1hWi-vgoaU','https://www.youtube.com/watch?v=1_qHb40iq64', 'https://www.youtube.com/watch?v=nZ67YBF3qRc','https://www.youtube.com/watch?v=adKEqin5SoI', 'https://www.youtube.com/watch?v=8UvS0CxIG_o']
export class Profile {
    constructor({name, email, id}) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.videos=[];
        this.urls = [];
        this.pic = null;
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
    selectedProfile: null,
    userProfile:null,
}
const getStorage = () => {
    try{
        let info = localStorage.getItem('appDataJson');

        return  info ? JSON.parse(info): appData;

    } catch(error) {
        console.log('no local storage');
        return appData
    }

}
export const GlobalProvider =  (props) => {
    // let appInfo = localStorage.getItem('appDataJson', JSON.stringify());
    // console.log(appInfo)
    // const [state, setState] = useState(appData)

    const [state, setState] = useState(getStorage());
    
    // const [state, setState] = useState(appData)
    
    useEffect(()=>{
        localStorage.setItem('appDataJson', JSON.stringify(state))
    }, [state]);
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
        newState.selectedProfile = null;
        setState(newState);
        if(username && password) {
            const userProfile = state.profiles.find(profile=> profile.email === username)
            if(userProfile) {
                newState.userProfile = userProfile;
                console.log('newState', newState)
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
        console.log(newState.selectedProfile)
        setState(newState);
        return newState.selectedProfile;
    }
    const  addVideo = async function(url, index) {
        let newState={...state};
        newState.userProfile.urls[index] = url;
        let data = await fetchYoutube(url);
        console.log(data)
        newState.userProfile.videos[index] =  await data;
        await setState(newState);
        await console.log('links', state.userProfile.urls, 'fetch',state.userProfile)
    }
    const reorderList = function(obj) {
        console.log('list has been reordered', obj)
        let newState={...state};
        newState.userProfile = obj;
        console.log('newstate',newState)
        setState(newState);
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
            reorderList,
        }}>{props.children}</GlobalContext.Provider>
        )
    }
