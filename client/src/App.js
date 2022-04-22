import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import NewBlog from "./components/NewBlog";
import EditBlog from "./components/EditBlog";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/new" element={<NewBlog/>}/>
                    <Route path="/edit" element={<EditBlog/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
