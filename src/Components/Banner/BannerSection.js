import React from 'react';
import { Button, Card } from 'react-bootstrap';

const BannerSection = () => {
    return (
        <div>
             <Card className="bg-dark text-white img-opacity">
      <Card.Img className='opacity-50 ' src="https://t4.ftcdn.net/jpg/03/08/28/69/360_F_308286950_IgZ1t5YNpv2ik4C5QJLdXu88vy2bZkKh.jpg" alt="Card image" />
      
      <Card.ImgOverlay>
        <div className='d-flex justify-content-between d-block d-md-none d-lg-none'>
        <Card.Text><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="white"/>
</svg>
</Card.Text>
        <Card.Text><Button variant='dark'>Join Group</Button></Card.Text>
        </div>
       <div className='d-flex flex-column justify-content-end h-75 ms-5'>
       <Card.Text className='fs-1'>
        Computer Engineering
        </Card.Text>
        <Card.Text className='fs-5'>142,765 Computer Engineers follow this</Card.Text>
       </div>
      </Card.ImgOverlay>
    </Card>
        </div>
    );
};

export default BannerSection;