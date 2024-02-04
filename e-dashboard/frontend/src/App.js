import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<h1>product page</h1>}></Route>
          <Route path='/add' element={<h1>add product page</h1>}></Route>
          <Route path='/update' element={<h1>update product page</h1>}></Route>
          <Route path='/logout' element={<h1>logout page</h1>}></Route>
          <Route path='/profile' element={<h1>profile page</h1>}></Route>
          <Route path='/signup' element={ <SignUp /> }></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
