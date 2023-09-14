import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import {useState} from "react";
import './App.css';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Page1 />} />
        <Route path='/2' element={<Page2 />} />
      </Routes>
    </>
  );
}

const Page1 = () => (
  <h1>1</h1>
)

const Page2 = () => (
  <h1>2</h1>
)

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
    
  return (
    <>
      <nav className='navbar'>
          <div className='navbar-container'>
               <Link to='/' className='navbar-logo'>
                 WIS
              </Link>
          </div>
      </nav>
    </>
  )
}
export default App;
