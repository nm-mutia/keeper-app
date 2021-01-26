import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { getNotes, setNote, delNote } from "../services/notes";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    let mounted = true;
    getNotes().then(items => {
      if(mounted) {
        setNotes(items)
      }
    });
    return (() => mounted = false);
  }, [notes]);

  function addNote(noteInput){
    setNote(noteInput);
    // setNotes((prevItem) => {
    //   return [...prevItem, noteInput];
    // });
  }

  function deleteNote(id){
    delNote(id);
    // setNotes((prevNotes) => {
    //   return prevNotes.filter((note, index) => {
    //     return index !== id; 
    //   })
    // });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((note) => {
        return (<Note key={note._id} id={note._id} title={note.title} content={note.content} onDelete={deleteNote} />);
      })}
      <Footer />
    </div>
  );
}

export default App;
