import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProfileDetail from './components/ProfileDetail';
import ProfileUpdate from './components/ProfileUpdate';
import ProfileForm from './components/ProfileForm';
import './App.css';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
            <Routes>
              <Route path="/profile/new" element={<ProfileForm/>} /> 
              <Route path="/profile/:id" element={<ProfileDetail/>} />
              <Route path="/profile/edit/:id" element={<ProfileUpdate/>} />
            </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
