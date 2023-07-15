import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { AuthProvider } from 'react-auth-kit';


import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import PrivateRoutes from './PrivateRoutes';
import Layout from './components/Layout';


function App() {
  return (
    <div className="App">
      <AuthProvider
      authName={"_auth"}
      authType={'cookie'}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "http:"}
      >
        <BrowserRouter>
          <Routes>
            <Route element={<Layout/>}>
              {/* Public routes */}
              <Route path='/' element={<Home/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path='register' element={<Register/>}/>

              {/* protected routes */}
              <Route element={<PrivateRoutes/>}>
                <Route path='/dashboard' element={<Dashboard/>}/>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
