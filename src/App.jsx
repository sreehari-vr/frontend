import React from 'react';
import Login from './Login'
import Body from './Body';
import SignUp from './SignUp';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body/>}>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signUp' element={<SignUp/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
