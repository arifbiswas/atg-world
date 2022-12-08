import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import NavbarSection from './Components/NavbarSection/NavbarSection';
import BannerSection from './Components/Banner/BannerSection';
import PostManuSection from './Components/PostManuSection/PostManuSection';
import PostBar from './Components/PostBar/PostBar';
import PostCard from './Components/PostCards/PostCard';
import Recommended from './Components/Recommended/Recommended';
import PostIconOnPhone from './Components/PostIconOnPone/PostIconOnPhone';
import LoginModal from './Components/Log/LoginModal/LoginModal';
import { useState } from 'react';
import RegisterModal from './Components/Log/RegisterModal/RegisterModal';

function App() {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  return (
    
    <Container >
      <Row className='d-block d-md-block d-lg-none'>
        <Col>
        <PostIconOnPhone></PostIconOnPhone>
        </Col>
      </Row>
      <Row>
        <Col>
        <NavbarSection setLoginModal={setLoginModal}></NavbarSection>
        </Col>
      </Row>
      <Row>
        <Col>
        <BannerSection setLoginModal={setLoginModal}></BannerSection>
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
      <Row >
        <Col className='col-lg-8'>
        <PostCard></PostCard>
        </Col>
        <Col className=' d-none d-md-none d-lg-block'>
        <Recommended></Recommended>
        </Col>
      </Row>
    <div>

      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}

    <LoginModal
      show={loginModal}
      onHide={() => setLoginModal(false)}
      setLoginModal={setLoginModal}
      setRegisterModal={setRegisterModal}
      registerModal={registerModal}
     >

     </LoginModal>
     
     
     <RegisterModal
      show={registerModal}
      onHide={() => setRegisterModal(false)}
      setLoginModal={setLoginModal}
      loginModal={loginModal}
      setRegisterModal={setRegisterModal}
     ></RegisterModal>
   
    </div>
    </Container>
  );
}

export default App;
