import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function AddNewSong(props) {
  const [title, setTitle] = useState("");
  const [album, setAlbum] = useState("");
  const [artist, setArtist] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [genre, setGenre] = useState("");

  async function handleSubmit(event) {
    event.preventDefault()
    let newSong = {
      title: title,
      artist: artist,
      album: album,
      release_date: releaseDate,
      genre: genre,
    };

    let response = await axios.post(
      "http://127.0.0.1:8000/api/songs/",
      newSong
    );
    if (response.status === 201) {
      await getAllSongs();
    }
  }
  return(
    <form onSubmit={handleSubmit}>
        

    </form>

  )
}

export default AddNewSong;
