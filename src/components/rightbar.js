import ListContent from './listcontent'
import {Profile, ProfileList} from './profile'
import { Button, TextField } from '@material-ui/core';
import Heading from './rightheading';
import Spotify from './spotify';
import { Route, Link, Switch, useHistory } from 'react-router-dom';
import EditProfile from './editProfile';
import {useGlobalContext } from './data';
import {useState, useCallback} from 'react';
import spotify from './spotify';
export default function RightBar(props) {
  const {state:{selectedProfile, userProfile}} = useGlobalContext();
  console.log('this is selected',selectedProfile)
  if(props.view == 'home') {
    return (
      <div className="right-bar">
        <div className="right-left">
          <Heading heading='Explore' />
          <ProfileList />
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
        <ListContent per='view' user={selectedProfile}/>
      </div>
      <div className="right-right">
        <Profile user={selectedProfile}/>
      </div>
    </div>
    )
  }
  if(props.view == 'adminprofile') {
    return (
    <div className="right-bar">
      <div className="right-left">
        <Heading heading='Profile' />
        <ListContent per='edit' user={userProfile}/>
      </div>
      <div className="right-right">
       User Profile
        <Profile user={userProfile}/>
        <EditProfile />
        <Spotify />
      </div>
    </div>
    )
  }

  if(props.view == 'edit-order') {
    return(

      <div className="right-bar">
        
        <div className="right-left-special">
          <div className='down-list'>
            <div className='down-number'>1.</div>
            <div className='down-number'>2.</div>
            <div className='down-number'>3.</div>
            <div className='down-number'>4.</div>
            <div className='down-number'>5.</div>
            <div className='down-number'>6.</div>
            <div className='down-number'>7.</div>
            <div className='down-number'>8.</div>
            <div className='down-number'>9.</div>
            <div className='down-number'>10.</div>
          </div>
         <ListContent per='drag'/>
         
        </div>
        <div className="right-right">
          User Profile
        <Profile user={userProfile}/>
        <EditProfile />
      </div>
    </div>
      )
  }
}
function TextInput(props) {
  const {userLogin, addPerson, state:{userProfile, profiles}} = useGlobalContext();
  const [state, setState] = useState({});
  const history = useHistory();
  //const linkToProfile = useCallback(() => history.push('/admin'), [history]);
  
  
  function handleSubmit (e) {
    e.preventDefault();
    userLogin(state.emailLogin, state.passLogin);
    console.log('userlogin', state)
    history.push("/admin");
    
  }
  function handleSubmitNew (e) {
    e.preventDefault();
    //addPerson({name:'stick', email:'gmail'})
    addPerson({
      name:state.nameCreate, 
      email:state.emailCreate, 
      password:state.passCreate
    })
    history.push("/admin");
    if(userProfile) {
      
    }
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