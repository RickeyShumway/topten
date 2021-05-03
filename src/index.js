import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { TopBar, MainContent, BottomBar, ListItem} from './App';
import reportWebVitals from './reportWebVitals';
import {GlobalProvider} from './components/data'


ReactDOM.render(
  <GlobalProvider>
  <React.StrictMode>
    <Router>
    <TopBar />
    <MainContent />
    <BottomBar />
    </Router>
  </React.StrictMode>
  </GlobalProvider>,
  document.getElementById('root')
);

reportWebVitals();
