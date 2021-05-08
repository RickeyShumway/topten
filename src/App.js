import './App.css';
import './css/style.css';
import React from 'react';
import { render } from 'react-dom';
import { Route, Link, Switch } from 'react-router-dom';
import HomePage from './views/home.js'
import LoginPage from './views/login.js'
import Admin from './views/admin.js'
import EditListOrder from './views/editorder.js'
import PubProfile from './views/pubprofile.js'
import LeftBar from './components/leftbar';
import {appData, Profile} from './components/data'
import {useGlobalContext } from './components/data';
import {useState, useRef } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Drag from './components/drag'
window.React = React;

function TopBar() {
  const {selectProfile, state:{selectedProfile, userProfile}} = useGlobalContext();
  const [state, setState] = useState();
  if(userProfile) {
    return (
      <div className="top-bar bar">
        <div className="logo">
          <Link to='/'>Top Ten</Link>
        </div>
        <div className="view-links">
        <div className="login">
          <Link to="/login">Login</Link>
        </div>
        <div className="profile-link" onClick={()=> selectProfile(userProfile.id)}>
          <Link to="/admin">Profile</Link>
        </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="top-bar bar">
        <div className="logo">
          <Link to='/'>Top Ten</Link>
        </div>
        <div className="view-links">
        <div className="login">
          <Link to="/login">Login</Link>
        </div>
        <div className="profile-link">
          <Link to="/login">Profile</Link>
        </div>
        </div>
      </div>
    )
  }
}
function MainContent() {
  return(
    <>
      <Switch>
        <Route exact path="/">
          <HomePage profileList={[...appData.profiles]}/>
        </Route>
        <Route path="/pubprofile">
          <PubProfile selected={appData.selectedProfile}/>
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/admin">
          <Admin selected={appData.userProfile}/>
        </Route>
        <Route path="/edit-order">
          <EditListOrder selected={appData.userProfile}/>
          
        </Route>
      </Switch>
    </>
  )
}
function BottomBar() {
  return (
  <div className="bottom-bar bar">
    Bottom Bar
  </div>
  )
}
function TenItems() {
  const list = [{
    url:'',
    title:'',
    description:'',
  }]
  return (
    <section>
      {list.map(item => <ListItem url={item.url} />)}
    </section>
  )
}

class ListItem extends React.Component {
  constructor() {
    super();
 
  }
  render() {
    return(
    <div className='list-item'>Hello this is list item {this.props.name}</div>
    )
  }
  changeSpot = (num) => {
    this.setState({place:num});
  } 
}

export { TopBar, MainContent, BottomBar, ListItem } ;