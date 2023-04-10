import logo from './logo.svg';
import './App.css';
import Sunny from './Pages/Sunny';
import Weather from './Pages/Weather';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Monday from './Pages/Monday';
import Tuesday from './Pages/Tuesday';
import Wednesday from './Pages/Wednesday';
import Thursday from './Pages/Thursday';
import Friday from './Pages/Friday';
import Saturday from './Pages/Saturday';
import Sunday from './Pages/Sunday';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <Routes>
        <Route path="/" element={<Weather /> }></Route>
        <Route path='/Monday' element={<Monday />} ></Route>
        <Route path='/Tuesday' element={<Tuesday />}></Route>
        <Route path='/Wednesday' element={<Wednesday />}></Route>
        <Route path='/Thursday' element={<Thursday />}></Route>
        <Route path='/Friday' element={<Friday />}></Route>
        <Route path='/Saturday' element={<Saturday />}></Route>
        <Route path='/Sunday' element={<Sunday />}></Route>
        {/* <Route path = "*" element = {<ErrorPage/>}></Route> */}

      </Routes>
    </Router>
      </header>
    </div>
  );
}

export default App;
