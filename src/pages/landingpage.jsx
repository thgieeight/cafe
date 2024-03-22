import React from 'react';
import { NavLink } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for react-toastify
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Navbar, Nav, Image, Button, Row, Col } from 'react-bootstrap';
const LandingPage = () => {
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
                            <Nav.Link href="#features">Menu</Nav.Link>
                            <Nav.Link href="#pricing">My Order</Nav.Link>
                            <Nav.Link href="#pricing">Cart</Nav.Link>
                            <Nav.Link href="#pricing">My Bill</Nav.Link>
                            <Nav.Link href="#pricing">About us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



            <div className="d-flex mt-3 my-2 justify-content-between align-items-center px-3">
                <span style={{ fontSize: "1.25rem" }}>Category</span>
                <span style={{ fontSize: "1.25rem" }}><NavLink to={"/category/all"}>See More</NavLink></span>
            </div>
            <Container>
                <ToastContainer /> {/* Add ToastContainer */}
                <Slider dots={false} swipeToSlide={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
                    <div>
                        <Row>
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                    <NavLink to={"/category/food"}><Image src="https://placehold.jp/80x80.png" className='rounded' /></NavLink>
                                </div>
                            </Col>
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                    <NavLink to={"/category/food"}><Image src="https://placehold.jp/80x80.png" className='rounded' /></NavLink>
                                </div>
                            </Col>
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                    <NavLink to={"/category/food"}><Image src="https://placehold.jp/80x80.png" className='rounded' /></NavLink>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                    <NavLink to={"/category/food"}><Image src="https://placehold.jp/80x80.png" className='rounded' /></NavLink>
                                </div>
                            </Col>
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                    <NavLink to={"/category/food"}><Image src="https://placehold.jp/80x80.png" className='rounded' /></NavLink>
                                </div>
                            </Col>
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                    <NavLink to={"/category/food"}><Image src="https://placehold.jp/80x80.png" className='rounded' /></NavLink>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Slider>
            </Container>

            <div className="d-flex mt-3 my-2 justify-content-between align-items-center px-3">
                <span style={{ fontSize: "1.25rem" }}>Food</span>
                <span style={{ fontSize: "1.25rem" }}><NavLink to={"/food/all"}>See More</NavLink></span>
            </div>
            <Container>
                <ToastContainer /> {/* Add ToastContainer */}
                <Slider dots={false} swipeToSlide={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
                    <div>
                        <Row>
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                    <NavLink to={"/food"}><Image src="https://placehold.jp/80x80.png" className='rounded' /></NavLink>
                                    <Button className='btn btn-sm my-2' onClick={handleAddToCart}>Add To Cart</Button>
                                </div>
                            </Col>
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                    <NavLink to={"/food"}><Image src="https://placehold.jp/80x80.png" className='rounded' /></NavLink>
                                    <Button className='btn btn-sm my-2' onClick={handleAddToCart}>Add To Cart</Button>
                                </div>
                            </Col>
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                    <NavLink to={"/food"}><Image src="https://placehold.jp/80x80.png" className='rounded' /></NavLink>
                                    <Button className='btn btn-sm my-2' onClick={handleAddToCart}>Add To Cart</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                    <NavLink to={"/food"}><Image src="https://placehold.jp/80x80.png" className='rounded' /></NavLink>
                                    <Button className='btn btn-sm my-2' onClick={handleAddToCart}>Add To Cart</Button>
                                </div>
                            </Col>
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                    <NavLink to={"/food"}><Image src="https://placehold.jp/80x80.png" className='rounded' /></NavLink>
                                    <Button className='btn btn-sm my-2' onClick={handleAddToCart}>Add To Cart</Button>
                                </div>
                            </Col>
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                    <NavLink to={"/food"}><Image src="https://placehold.jp/80x80.png" className='rounded' /></NavLink>
                                    <Button className='btn btn-sm my-2' onClick={handleAddToCart}>Add To Cart</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Slider>
            </Container>




        </>
    );
}
export default LandingPage;
