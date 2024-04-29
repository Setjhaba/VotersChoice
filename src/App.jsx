import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';
import PolitcalParties from './components/PoliticalParties/PolitcalParties';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Provincial from './components/Provincial/Provincial';


function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Hero />} />
            
          <Route path='/national-candidates' element={<PolitcalParties />} />  

          <Route path='/provincial-candidates' element={<Provincial />} /> 

          <Route path='/contact' element={<Contact />} />  
        </Routes>
      </div>
      <Footer />
    </>
 
  );
}

export default App;
