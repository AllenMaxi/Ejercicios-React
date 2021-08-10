import React from 'react';
import ContactForm from './components/ContactForm';
import CrudApi from './components/CrudApi';
import CrudApp from './components/CrudApp';
import SongSearch from './components/SongSearch';

function App() {

  return (
    <div>
      <ContactForm/>
    <hr/>
      <SongSearch/>
    <hr/>
      <CrudApi/>
    <hr/>
      <CrudApp/>
    </div>
  );
}

export default App;
