import LeftBar from "../components/leftbar";
import RightBar from "../components/rightbar";
import {useGlobalContext } from '../components/data';
import {useState} from 'react';

export default function Admin() {
    return (
        <div class='main-content'>
        <LeftBar />
        <RightBar view='adminprofile'/>
    </div>
)
}