import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import './App.css';

function App() {
  const [entries, setEntries] = useState([{}]);

  function addNewEntry(entry){
    let tempEntries= [...entries, entry];

    setEntries(tempEntries);
  }
  
  
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <h3 style={{margin: '1em'}}>Social<small className='text-muted'>Feed</small></h3>
      </nav>
      <div className='container-fluid'>
        <div className='row'>
          <div className='border-box'>
            <CreatePostForm/>
          </div>
        
      </div>
    </div>
    </div>

  );
}

export default App;
