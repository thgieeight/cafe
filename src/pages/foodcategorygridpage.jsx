import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav, Image, Row, Col } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const FoodCategoryGridPage=()=>{
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
                        <NavLink to="/order" style={{ textDecoration: 'none', color: 'blue' }}>My Order</NavLink>
                            <NavLink to="/cart" style={{ textDecoration: 'none', color: 'blue' }}>Cart</NavLink>
                            <NavLink to="/bill" style={{ textDecoration: 'none', color: 'blue' }}>My Bill</NavLink>
                            <NavLink to="/about" style={{ textDecoration: 'none', color: 'blue' }}>About us</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className='my-2'>
                <Row>
                    <Col xs={7} className="offset-1">
                        <Breadcrumb>
                            <Breadcrumb.Item>
                            <NavLink to={"/"}>Menu</NavLink>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>
                                Category / All
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>

            <Container className='my-2'>
                    <div className='my-3'>
                        <Row>
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                    <NavLink to={"/category/food"}><Image src="https://placehold.jp/80x80.png" className='rounded'/></NavLink>
                                </div>
                            </Col>    
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                <NavLink to={"/category/food"}><Image src="https://placehold.jp/80x80.png" className='rounded'/></NavLink>
                                </div>
                            </Col>
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                <NavLink to={"/category/food"}><Image src="https://placehold.jp/80x80.png" className='rounded'/></NavLink>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                    <Row>
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                <NavLink to={"/category/food"}><Image src="https://placehold.jp/80x80.png" className='rounded'/></NavLink>
                                </div>
                            </Col>    
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                <NavLink to={"/category/food"}><Image src="https://placehold.jp/80x80.png" className='rounded'/></NavLink>
                                </div>
                            </Col>
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                <NavLink to={"/category/food"}><Image src="https://placehold.jp/80x80.png" className='rounded'/></NavLink>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='my-3'>
                        <Row>
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                    <NavLink to={"/category/food"}><Image src="https://placehold.jp/80x80.png" className='rounded'/></NavLink>
                                </div>
                            </Col>    
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                <NavLink to={"/category/food"}><Image src="https://placehold.jp/80x80.png" className='rounded'/></NavLink>
                                </div>
                            </Col>
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                <NavLink to={"/category/food"}><Image src="https://placehold.jp/80x80.png" className='rounded'/></NavLink>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                    <NavLink to={"/category/food"}><Image src="https://placehold.jp/80x80.png" className='rounded'/></NavLink>
                                </div>
                            </Col>    
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                <NavLink to={"/category/food"}><Image src="https://placehold.jp/80x80.png" className='rounded'/></NavLink>
                                </div>
                            </Col>
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                <NavLink to={"/category/food"}><Image src="https://placehold.jp/80x80.png" className='rounded'/></NavLink>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='my-3'>
                        <Row>
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                    <NavLink to={"/category/food"}><Image src="https://placehold.jp/80x80.png" className='rounded'/></NavLink>
                                </div>
                            </Col>    
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                <NavLink to={"/category/food"}><Image src="https://placehold.jp/80x80.png" className='rounded'/></NavLink>
                                </div>
                            </Col>
                            <Col className='text-center' sm={4} xs={4}>
                                <div className="d-flex flex-column justify-content-center h-100">
                                <NavLink to={"/category/food"}><Image src="https://placehold.jp/80x80.png" className='rounded'/></NavLink>
                                </div>
                            </Col>
                        </Row>
                    </div>
            </Container>


    </>)
}

export default FoodCategoryGridPage;