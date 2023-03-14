import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home'
import About from './components/pages/About';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Newpage from './components/pages/Newpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header/>
            <Routes>
              <Route path='/'  element= {<Home /> } />
              <Route path='/newpage'  element= { <Newpage /> } />
              <Route path='/pages/About' element= {<About />} />
              <Route path='/pages/Services' element= {<Services />} />
              <Route path='/pages/Contact' element= {<Contact />} />
            </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;
