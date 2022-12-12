import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Navbar from '../src/Components/Navbar/NavBar.jsx';


function App() {

  const[songs, setSongs] = useState([]);

  useEffect(()=> {
    getAllSongs();

  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/songs/');
    //console.log(response)
    //debugger;
    setSongs(response.data)
  }


  return (
    <div>
      <div>
        <Navbar/>
      </div>
    </div>
  );
}

export default App;
