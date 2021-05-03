import LeftBar from "../components/leftbar";
import RightBar from "../components/rightbar";
import { Test } from "../components/classes"
import { Button, TextField } from '@material-ui/core';

export default function LoginPage() {
    return (
        <div className='main-content'>
            <LeftBar />
            <RightBar view='login'/>
           
        </div>
    )
}

