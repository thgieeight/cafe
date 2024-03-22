import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav, Image, Button, Row, Col } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for react-toastify
import { toast, ToastContainer } from 'react-toastify';


const FoodGridPage=()=>{
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
return(<>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                <Navbar.Brand style={{ textDecoration: 'none', color: 'black' }}>
                        <NavLink to={"/"} style={{ textDecoration: 'none', color: 'black' }}>Logo Restaurant App</NavLink>
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto text-center" style={{ paddingLeft: "0px", justifyContent: "space-between", gap: "15px" }}>
                        <NavLink to="/" style={{ textDecoration: 'none', color: 'blue' }}>Menu</NavLink>
                            <Nav.Link href="#pricing">My Order</Nav.Link>
                            <Nav.Link href="#pricing">Cart</Nav.Link>
                            <Nav.Link href="#pricing">My Bill</Nav.Link>
                            <Nav.Link href="#pricing">About us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container>
                <Row>
                    <Col xs={7} className="offset-1">
                        <Breadcrumb>
                            <Breadcrumb.Item>
                            <NavLink to={"/"}>Menu</NavLink>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>
                                Food / All
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>

            <Container className='my-4'>
            <ToastContainer /> {/* Add ToastContainer */}

                    <div className='my-3'>
                        <Row>
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                    <NavLink to={"/food"}><Image src="https://placehold.jp/80x80.png" className='rounded'/></NavLink>
                                    <Button className='btn btn-sm my-2' onClick={handleAddToCart}>Add To Cart</Button>
                                </div>
                            </Col>    
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                <NavLink to={"/food"}><Image src="https://placehold.jp/80x80.png" className='rounded'/></NavLink>
                                <Button className='btn btn-sm my-2' onClick={handleAddToCart}>Add To Cart</Button>
                                </div>
                            </Col>
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                <NavLink to={"/food"}><Image src="https://placehold.jp/80x80.png" className='rounded'/></NavLink>
                                <Button className='btn btn-sm my-2' onClick={handleAddToCart}>Add To Cart</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                    <Row>
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                <NavLink to={"/food"}><Image src="https://placehold.jp/80x80.png" className='rounded'/></NavLink>
                                <Button className='btn btn-sm my-2' onClick={handleAddToCart}>Add To Cart</Button>
                                </div>
                            </Col>    
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                <NavLink to={"/food"}><Image src="https://placehold.jp/80x80.png" className='rounded'/></NavLink>
                                <Button className='btn btn-sm my-2' onClick={handleAddToCart}>Add To Cart</Button>
                                </div>
                            </Col>
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                <NavLink to={"/food"}><Image src="https://placehold.jp/80x80.png" className='rounded'/></NavLink>
                                <Button className='btn btn-sm my-2' onClick={handleAddToCart}>Add To Cart</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='my-3'>
                        <Row>
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                    <NavLink to={"/food"}><Image src="https://placehold.jp/80x80.png" className='rounded'/></NavLink>
                                    <Button className='btn btn-sm my-2' onClick={handleAddToCart}>Add To Cart</Button>
                                </div>
                            </Col>    
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                <NavLink to={"/food"}><Image src="https://placehold.jp/80x80.png" className='rounded'/></NavLink>
                                <Button className='btn btn-sm my-2' onClick={handleAddToCart}>Add To Cart</Button>
                                </div>
                            </Col>
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                <NavLink to={"/food"}><Image src="https://placehold.jp/80x80.png" className='rounded'/></NavLink>
                                <Button className='btn btn-sm my-2' onClick={handleAddToCart}>Add To Cart</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>

            </Container>




</>);
}

export default FoodGridPage;