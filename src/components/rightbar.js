import ListContent from './listcontent'
import {Profile, ProfileList} from './profile'
import { Button, TextField } from '@material-ui/core';
import Heading from './rightheading';
import {useGlobalContext } from './data';
import {useState} from 'react';
export default function RightBar(props) {
  const {...state} = useGlobalContext();
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
        <ListContent user={props.selected}/>
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
        <ListContent user={props.selected}/>
      </div>
      <div className="right-right">
       User Profile
        <Profile user={props.selected}/>
        
      </div>
    </div>
    )
  }
}
function TextInput(props) {
  const {userLogin, addPerson, state:{userProfile, profiles}} = useGlobalContext();
  const [state, setState] = useState({});
  function handleSubmit (e) {
    e.preventDefault();
    userLogin(state.emailLogin, state.passLogin);
    console.log('userlogin', state)
  }
  function handleSubmitNew (e) {
    e.preventDefault();
    //addPerson({name:'stick', email:'gmail'})
    addPerson({
      name:state.nameCreate, 
      email:state.emailCreate, 
      password:state.passCreate
    })


  }
  function handleInputChange(e) {
    const {target:{value, name}} = e;
    console.log('states', state.nameCreate, state.emailCreate, state.passCreate)
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
          <form className='form' onSubmit={handleSubmitNew} noValidate autoComplete="off">
              <TextField value={state.nameCreate} onChange={handleInputChange} className="outlined-basic" name="nameCreate" variant="outlined" label='Name'/>
              <TextField value={state.emailCreate} onChange={handleInputChange} className="outlined-basic" name="emailCreate" variant="outlined" label='Email'/>
              <TextField value={state.passCreate} onChange={handleInputChange} className="outlined-basic" name="passCreate" variant="outlined" label='Password'/>
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