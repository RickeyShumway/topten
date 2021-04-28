import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { TopBar, MainContent, BottomBar, ListItem} from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <TopBar />
    <MainContent />
    <BottomBar />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
