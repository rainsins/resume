import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import config from './config.json';
import printJS from 'print-js';

function App() {
  useEffect(()=>{
    console.log(config);
  },[]);
  return (
    <>
    <div className="App" id='resume-print-box'>
      <div className='rersume-box'>
        <div className='rersume-content-box'>
          
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
