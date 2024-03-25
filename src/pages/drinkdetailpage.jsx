import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const DrinkDetailPage = () => {
    const handleAddToCart = () => {
        toast.success("Item added to cart!", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

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

            {/* <h3>that food click: Name or id</h3> */}

            <Container>
                <Row>
                    <Col xs={5} className="offset-1">
                        <Breadcrumb>
                            <Breadcrumb.Item>
                            <NavLink to={"/"}>Menu</NavLink>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>
                                Drink
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>



            <Container className='my-1'>
                <Row>
                    <Col xs={6}>
                        <Image src="https://placehold.jp/160x160.png" className='rounded' />
                    </Col>
                    <Col xs={5} className="offset-1">
                        <p>Name</p>
                        <p>Price</p>
                        <p>Status</p>
                        <Button className='btn btn-sm my-2' onClick={handleAddToCart}>Add To Cart</Button>
                    </Col>
                    <Col xs={12} className='border my-2 text-justify'>
                        <span style={{ fontSize: "12px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sunt dicta minima. Mollitia, eius eveniet voluptate soluta, optio ipsum iste doloremque quasi nesciunt amet fugit nostrum blanditiis! Velit, deserunt voluptatibus!</span>
                    </Col>
                </Row>
            </Container>

            <ToastContainer /> {/* Ensure ToastContainer is rendered */}
        </>
    );
}

export default DrinkDetailPage;
