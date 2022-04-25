import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import NewBlog from "./components/NewBlog";
import EditBlog from "./components/EditBlog";
import OneBlog from "./components/OneBlog";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/new" element={<NewBlog/>}/>
                    <Route path="/edit/:id" element={<EditBlog/>}/>
                    <Route path="/blog/:id" element={<OneBlog/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
