
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Home from './pages/Home';
import Footer from './Components/Footer'
import About from './Pages/About';
import Banner from './Components/Banner';
import Contact from './Pages/Contact';
import Property from './Components/Property';
import PropertyDetails from './Components/PropertyDetails';
import BackToTop from './Components/BackToTop';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/property' element={<Property />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
        <Banner />
        <Footer />
        <BackToTop />
      </BrowserRouter>
    </div>
  )
}

export default App
