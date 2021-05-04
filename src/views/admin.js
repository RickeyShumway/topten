import LeftBar from "../components/leftbar";
import RightBar from "../components/rightbar";
import {useGlobalContext } from '../components/data';
import {useState} from 'react';

export default function Admin(props) {
    const {state:{userProfile}} = useGlobalContext();
    console.log('userProfile',  userProfile)
    return (
        <div class='main-content'>
        <LeftBar />
        <RightBar selected={userProfile} view='adminprofile'/>
    </div>
)
}