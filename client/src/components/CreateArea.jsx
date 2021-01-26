import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [checked, setChecked] = useState(false);

  const [noteInput, setNoteInput] = useState({
    title:"",
    content:""
  });

  function handleChange(e){
    const {name, value} = e.target;
    setNoteInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function collapseUI(){
    setChecked(true);
  }

  function handleSubmit(e){
    props.onAdd(noteInput);
    setNoteInput({title:"", content:""}); 
    e.preventDefault();
  }

  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
        {checked && <input onChange={handleChange} name="title" placeholder="Title" value={noteInput.title} />}
        <textarea 
          onChange={handleChange} 
          name="content" 
          placeholder="Take a note..." 
          rows={checked ? 3 : 1} 
          value={noteInput.content}
          onClick={collapseUI} />
        <Zoom in={checked}>
          <Fab type="submit"><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
