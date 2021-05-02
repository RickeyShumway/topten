import ListContent from './listcontent'
import {Profile, ProfileList} from './profile'
import { Button, TextField } from '@material-ui/core';
import Heading from './rightheading'
export default function RightBar(props) {
  if(props.view == 'home') {
    return (
      <div className="right-bar">
        <div className="right-left">
          <Heading heading='Explore' />
          <ProfileList profiles={props.profiles}/>
        </div>
        <div className="right-right"></div>
      </div>
      )
  }
  if(props.view == 'login') {
    return (
    <div className="right-bar">
      <div className="right-left">
        <Heading heading='Log in' />
        <TextInput />
      </div>
      <div className="right-right">
      </div>
    </div>
    )
  }
  if(props.view == 'pubprofile') {
    return (
    <div className="right-bar">
      <div className="right-left">
        <Heading heading='Profile' />
        <ListContent />
      </div>
      <div className="right-right">
        <Profile user={props.selected}/>
      </div>
    </div>
    )
  }
  if(props.view == 'adminprofile') {
    return (
    <div className="right-bar">
      <div className="right-left">
        <Heading heading='Profile' />
        <ListContent />
      </div>
      <div className="right-right">
       
        <Profile user={props.selected}/>
        
      </div>
    </div>
    )
  }
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