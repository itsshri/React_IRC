import React from 'react'
import {Routes,Route} from 'react-router-dom'

import User from './Pages/User';
import Edituser from './Pages/Adduser';
import Adduser from './Pages/Edituser';
const App=()=>{
  return (
    <>
    <Routes>
      <Route path='/' element={<User/>}></Route>
      <Route path='/add' element={<Adduser/>}></Route>
      <Route path='/edit' element={<Edituser/>}></Route>
    </Routes>
    </>
  );
}

export default App
