import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
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
export default App;
