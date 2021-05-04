import LeftBar from "../components/leftbar";
import RightBar from "../components/rightbar";
import {useGlobalContext } from '../components/data';
import {useState} from 'react';

export default function PubProfile(props) {
    const {state:{selectedProfile}} = useGlobalContext();
    
    console.log('selectedProfile', selectedProfile)
    return (
        <div class='main-content'>
            <LeftBar />
            <RightBar selected={selectedProfile} view='pubprofile'/>
        </div>
    )
}