import { Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Public routes */}
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>

        {/* protected routes */}
      </Routes>
    </div>
  );
}

export default App;
