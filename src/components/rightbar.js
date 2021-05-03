import ListContent from './listcontent'
import {Profile, ProfileList} from './profile'
import { Button, TextField } from '@material-ui/core';
import Heading from './rightheading';
import {useGlobalContext } from './data';
import {useState} from 'react';
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
        <TextInput formId="login" emailId='login-email' passId='login-pass'/>
      </div>
      <div className="right-right">
        <Heading heading='Create Account' />
        <TextInput formId='create' nameId='create-name' emailId='create-email' passId='create-pass'/>
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
  const {userLogin, state:{userProfile, profiles}} = useGlobalContext();
  const [state, setState] = useState({});
  function handleSubmit (e) {
    e.preventDefault();
    userLogin(state.emailLogin, state.passLogin);
    console.log('userlogin', state)
    

  }
  function handleInputChange(e) {
    const {target:{value, name}} = e;
    setState({
      ...state,
      [name]:value,
    })

  }

  console.log('userprofile', userProfile, profiles );

  if(props.emailId == 'login-email') {
    return(
        <div className='login-form'>
            <form className='form' onSubmit={handleSubmit} noValidate autoComplete="off">
                <TextField value={state.emailLogin} onChange={handleInputChange} name='emailLogin'  className="outlined-basic" label="Email" variant="outlined" />
                <TextField value={state.passLogin} onChange={handleInputChange} name='passLogin' className="outlined-basic" label="Password" variant="outlined" />
                <Button type='submit'>Submit</Button>
            </form>
  
        </div>
    )
  } else {
    return(
      <div className='login-form'>
          <form className='form' onSubmit={props.click} noValidate autoComplete="off">
              <TextField id={props.nameId} className="outlined-basic" label="Name" variant="outlined" />
              <TextField id={props.emailId} className="outlined-basic" label="Email" variant="outlined" />
              <TextField id={props.passId} className="outlined-basic" label="Password" variant="outlined" />
              <Button type='submit'>Submit</Button>
          </form>

      </div>
  )
  }
}

// function handleSubmit(e) {
//   e.preventDefault();
//   console.log(this.inputRef.current.value)


// }
// function handleSubmit(e) {
//   e.preventDefault();

//   let nameId = `${e.target.id}-name`;
//   let emailId = `${e.target.id}-email`;
//   console.log(nameId, emailId)
//   // let nameVal = document.getElementById(nameId).value;
//   let emailVal = document.getElementById(emailId).value;
//   console.log(emailVal)
//   console.log('prevented')

//}