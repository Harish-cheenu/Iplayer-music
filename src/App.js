import React from 'react';
import Sidebar from './components/js/sidebar';
import Container from './components/js/container';
import PlayerMenu from './components/js/PlayerMenu';
import "./components/css/sidebar.css";
import './App.css';
import  {ContextProvider}  from './components/js/Context';


function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Sidebar/>
        <Container/>
        <PlayerMenu></PlayerMenu>
     </ContextProvider>
    </div>
  );
}

export default App;
