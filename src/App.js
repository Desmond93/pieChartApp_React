import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import PageForm from './Components/PageForm/PageForm';
import { Route } from 'react-router-dom';
import PageDiagram from './Components/PageDiagram/PageDigram';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Route path="/form" render={() => 
        <PageForm positions={props.state.positions} dispatch={props.dispatch} />
      }/>
      <Route path="/diagram" render={() =>
        <PageDiagram state={props.state} dispatch={props.dispatch} />
      }/>
    </div>
  );
}

export default App;
