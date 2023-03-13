import React from 'react';
import './App.scss';
import './assets/css/style.css';
//import OwlCarousel from 'react-owl-carousel2';
//import 'react-owl-carousel2/lib/css/style.css';
//import 'react-owl-carousel2/src/owl.theme.default.css';

import Header from './layout/Header';
import Footer from './layout/Footer';
import FindTalent from './pages/FindTalent';
import FindWork from './pages/FindWork';
import Enterprise from './pages/Enterprise';
import WhyCommradery from './pages/WhyCommradery';
import Login from './auth/Login';
import SignUp from './auth/SignUp';

import { 
  BrowserRouter as Router, 
  Route,
  Routes   
} from 'react-router-dom';

function App() {
  return (
    
    <Router>
      <div className="App">
        <Header />
          
          {/* all components */} 
          <div>
            <Routes>
              <Route exact path='/' element={<FindTalent />}></Route>
              <Route exact path='/find-talent' element={<FindTalent />}></Route>
              <Route exact path='/find-work' element={<FindWork />}></Route>
              <Route exact path='/enterprise' element={<Enterprise />}></Route>
              <Route exact path='/why-commradery' element={<WhyCommradery />}></Route>
              <Route exact path='/login' element={<Login />}></Route>
              <Route exact path='/sign-up' element={<SignUp />}></Route>
            </Routes>
          </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
