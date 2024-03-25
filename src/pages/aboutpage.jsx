import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav, Image, Row } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand style={{ textDecoration: 'none', color: 'black' }}>
            <NavLink to={"/"} style={{ textDecoration: 'none', color: 'black' }}>Logo Restaurant App</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto text-center" style={{ paddingLeft: "0px", justifyContent: "space-between", gap: "15px" }}>
              <NavLink to="/" style={{ textDecoration: 'none', color: 'blue' }}>Menu</NavLink>
              <NavLink to="/order" style={{ textDecoration: 'none', color: 'blue' }}>My Order</NavLink>
              <NavLink to="/cart" style={{ textDecoration: 'none', color: 'blue' }}>Cart</NavLink>
              <NavLink to="/bill" style={{ textDecoration: 'none', color: 'blue' }}>My Bill</NavLink>
              <NavLink to="/about" style={{ textDecoration: 'none', color: 'blue' }}>About us</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Image src="https://placehold.jp/1800x800.png" className='rounded' />
        </Row>
        <Row>
          <span style={{ textAlign: 'justify' }} className='my-2'>Welcome to our restaurant app, where ordering your favorite food and drinks is just a tap away! Designed to make your dining experience seamless and enjoyable, our app serves as your personal waiter, right at your fingertips. With our user-friendly interface, you can easily browse through our menu, select your desired items, and add them to your virtual cart. Whether you're craving a hearty meal or a refreshing beverage, our app has got you covered.</span>
        
        <span style={{ textAlign: 'justify' }}>Once you're seated at your table, simply scan the QR code provided, and your dining session will begin. From there, every order you make and every item you enjoy will be conveniently tallied up and displayed on your app. No need to worry about keeping track of paper receipts or calculating totals – our app does it all for you. So sit back, relax, and let our restaurant app enhance your dining experience with convenience and efficiency.</span>
        </Row>
      </Container>
    </>
  )
}

export default AboutPage;
