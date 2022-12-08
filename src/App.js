import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import NavbarSection from './Components/NavbarSection/NavbarSection';
import BannerSection from './Components/Banner/BannerSection';

function App() {
  return (
    <div className="container">
     <NavbarSection></NavbarSection>
     <BannerSection></BannerSection>
    </div>
  );
}

export default App;
