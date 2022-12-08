import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import NavbarSection from './Components/NavbarSection/NavbarSection';
import BannerSection from './Components/Banner/BannerSection';
import PostManuSection from './Components/PostManuSection/PostManuSection';
import PostBar from './Components/PostBar/PostBar';

function App() {
  return (
    // <div className="full-container mx-auto">
    //  <NavbarSection></NavbarSection>
    //  <BannerSection></BannerSection>
    // </div>
    <Container>
      <Row>
        <Col>
        <NavbarSection></NavbarSection>
        </Col>
      </Row>
      <Row>
        <Col>
        <BannerSection></BannerSection>
        </Col>
      </Row>
      <Row >
        <Col className='col-8'>
        <PostManuSection></PostManuSection>
        </Col>
        <Col>
        <PostBar></PostBar>
        </Col>
        <hr class="mt-2 d-none d-md-none d-lg-block"/>
      </Row>
    </Container>
  );
}

export default App;
