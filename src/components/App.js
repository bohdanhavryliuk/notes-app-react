import NotesTable from './NotesTable';
import { useState } from 'react';
import InputPanel from './InputPanel';
import CountersTable from './CountersTable';

function App() {

  const [modalState, setState] = useState(false);


  return (
    <>
      <NotesTable />
      <button className='create-note-btn' onClick={
        function () {
          return setState(!modalState);
        }
      }>Create Note</button>
      {modalState ? (<InputPanel closePanel={setState} note={null} />) : (<></>)}
      <CountersTable />
    </>
  );
}

export default App;
