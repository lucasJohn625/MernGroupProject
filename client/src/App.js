import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import NewBlog from "./components/NewBlog";
import EditBlog from "./components/EditBlog";
import OneBlog from "./components/OneBlog";
import ProfileDetail from './components/ProfileDetail';
import ProfileUpdate from './components/ProfileUpdate';
import ProfileForm from './components/ProfileForm';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/new" element={<NewBlog/>}/>
                    <Route path="/edit/:id" element={<EditBlog/>}/>
                    <Route path="/blog/:id" element={<OneBlog/>} />
                    <Route path="/profile/new" element={<ProfileForm/>} />
                    <Route path="/profile/:id" element={<ProfileDetail/>} />
                    <Route path="/profile/edit/:id" element={<ProfileUpdate/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
    }
export default App;
