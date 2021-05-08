import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { TopBar, MainContent, BottomBar, ListItem} from './App';
import reportWebVitals from './reportWebVitals';
import {GlobalProvider} from './components/data'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Drag from './components/drag'


ReactDOM.render(
  <GlobalProvider>
  <React.StrictMode>
    <Router>
    <TopBar />
    <DragDropContext>
    <MainContent />
    </DragDropContext>
    <BottomBar />
    </Router>
  </React.StrictMode>
  </GlobalProvider>,
  document.getElementById('root')
);

reportWebVitals();
