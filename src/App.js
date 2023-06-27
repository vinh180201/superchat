import React from 'react';
import './App.css';

import Chat from './Chat';
// import { FirebaseProvider } from './component/FirebaseProvider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/:project_name/:token" element={<Chat />}></Route>
      </Routes>
    </Router>
  );
}

export default App;




