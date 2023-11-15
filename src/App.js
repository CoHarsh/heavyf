import './App.css';
import CreatorRegistrationForm from './Pages/Creator/Signup'
import CreatorProfile from './Pages/Creator/CreatorProfile'
import BrandRegistrationForm from './Pages/Brand/BrandRegistrationForm';
import BrandProfile from './Pages/Brand/BrandProfile';
import FourNotFour from './Pages/Errors/FourNotFour'; 
import CreatorPublicProfile from './Pages/Creator/PublicPage/PublicProfile'
import BrandPublicProfile from './Pages/Brand/PublicPage/PublicProfile'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/creatorregistration' exact element={<CreatorRegistrationForm/>} />
          <Route path='/brandregistration' exact element={<BrandRegistrationForm/>}/>
          <Route path='/creator/profile' exact element={<CreatorProfile/>} />
          <Route path='/brand/profile' exact element={<BrandProfile/>} />
          <Route path='/creatorprofile' exact element={<CreatorPublicProfile/>}/>
          <Route path='/brandprofile' exact element={<BrandPublicProfile/>} />
          <Route element={<FourNotFour/>}/>
      </Routes>
    </Router>
  );
}

export default App;
