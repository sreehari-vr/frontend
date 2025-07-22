import React from 'react';
import Login from './components/Login'
import Body from './components/Body';
import SignUp from './components/SignUp';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import appStore from './utils/appStore';

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body/>}>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signUp' element={<SignUp/>}></Route>
          </Route>
        </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
