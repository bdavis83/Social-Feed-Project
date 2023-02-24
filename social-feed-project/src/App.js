import React, { useState } from 'react';
import DisplayNav from './Components/NavBar/NavBar';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts'
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import './App.css';

function App() {
  const [entries, setEntries] = useState([]);

  function addNewEntry(entry){
    let tempEntries= [...entries, entry];

    setEntries(tempEntries);
  }
  
  
  return (
    <div>
      <div className='nav'>
        <DisplayNav/>
      </div>
      
      <div className='container-fluid'>
        <div className='row'>
          <div className='border-box' style={{width: '75%', margin: 'auto', padding: '1em', marginBottom: "1em"}}>
            <CreatePostForm CreatePostFormProperty = {addNewEntry}/>
          </div>
          <div className='border-box' style={{height: '450px', width: '75%', margin:'auto', padding:'1em'}}>
            <DisplayPosts parentEntries = {entries}/>
          </div>
        
      </div>
    </div>
    </div>

  );
}

export default App;
