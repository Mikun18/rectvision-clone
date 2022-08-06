import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home'
import Pricing from './components/Pricing'
import Career from './components/Career'
import Contact from './components/Contact'
 
function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='Pricing' element={<Pricing />} />
            <Route path='Career' element={<Career />} />
            <Route path='Contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
