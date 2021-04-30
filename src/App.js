import './App.css';
import React from 'react';
import { render } from 'react-dom';
import { Route, Link, Switch } from 'react-router-dom';
import HomePage from './views/home.js'
import LoginPage from './views/login.js'
import Admin from './views/admin.js'
import AddSocial from './views/addsocial.js'
import RegList from './views/list.js'
import LeftBar from './components/leftbar';
import {appData, Profile} from './components/data'
window.React = React;

//appData.addPerson('rickey');
appData.addPerson('rick')
appData.addPerson('jon')
appData.addPerson('kyle')
appData.addPerson('john')
appData.addPerson('ben')
appData.addPerson('jan')

function TopBar() {
  return (

    <div className="top-bar bar">
      <div className="logo">
        <Link to='/'>Top Ten</Link>
      </div>
      <span>
      <div className="login">
        <Link to="/login">Login</Link>
      </div>
      <div className="profile-link">
        <Link to="/admin">Profile</Link>
      </div>
      </span>
    </div>
  )
}
function MainContent() {
  return(
    <div className="main">
      <Switch>
        <Route exact path="/">
          <HomePage profileList={[...appData.profiles]}/>
        </Route>
        <Route path="/favorites/:id">
          <RegList />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    </div>
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