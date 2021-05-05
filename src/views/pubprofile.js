import LeftBar from "../components/leftbar";
import RightBar from "../components/rightbar";
import {useGlobalContext } from '../components/data';
import {useState} from 'react';

export default function PubProfile() {
    return (
        <div class='main-content'>
            <LeftBar />
            <RightBar view='pubprofile'/>
        </div>
    )
}