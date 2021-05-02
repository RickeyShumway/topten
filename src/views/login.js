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

function TextInput(props) {
    return(
        <div className='login-form'>
            <form className='form' noValidate autoComplete="off">
                <TextField className="outlined-basic" label="Email" variant="outlined" />
                <TextField className="outlined-basic" label="Password" variant="outlined" />
                <Button color='green'>Submit</Button>
            </form>

        </div>
    )
}