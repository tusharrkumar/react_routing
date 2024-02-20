import Navbar from './Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import SignUp from './Components/SignUp';

import Blog from './Components/AboutPages/Blog';
import Info from './Components/AboutPages/Info';
import Sub from './Components/AboutPages/Sub';

function App(){
  return(
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About/>}>
            <Route path='blog' element={<Blog/>}></Route>
            <Route path='info' element={<Info/>}></Route>
            <Route path='sub' element={<Sub/>}></Route>
          </Route>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/signup' element={<SignUp/>}/>


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;