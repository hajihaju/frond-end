import './App.css';
import Nav from './components/bebe';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/private components';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav /> 
      <Routes>
        <Route element={<PrivateComponent />}>
        <Route path="/" element ={<h1>this is my home page</h1>}/>
        <Route path="/Add" element ={<h1>this page to add the items</h1>}/>
        <Route path="/Listing" element ={<h1>this is my Listing items</h1>}/>
        <Route path="/Logout" element ={<h1>Logout page</h1>}/>
        <Route path="/profile" element ={<h1>profile page of bebes </h1>}/>
        </Route>
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
