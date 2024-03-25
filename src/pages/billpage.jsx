import React from 'react';
import { Container, Navbar, Nav, Table, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const BillPage = () => {
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

            <Container className="mt-4">
                {/* Header */}
                <Row>
                    <h4 className="text-center">Restaurant Name</h4>
                    <p className="text-center mt-2">Address: 123 Main St, City, Country</p>
                    <p className="text-center">Contact: +123-456-7890</p>
                    <p className="text-center">Date: March 25, 2024</p>
                </Row>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Sample order data */}
                        <tr className='text-center'>
                            <td>1</td>
                            <td>Dosa</td>
                            <td>2</td>
                            <td>350</td>
                            <td>700</td>
                        </tr>
                    </tbody>
                </Table>
                <div className='my-3'>
                    <p>Sales Tax: Rs.10</p>
                    <p>Service Charge: Rs.15</p>
                </div>
                <div>
                    <p>No discounts applied.</p>
                </div>
                <hr></hr>
                {/* Total Amount Due */}
                <Row className="justify-content-end mt-3">
                    <Col xs={6} className="text-end">
                        <h5>Total:</h5>
                    </Col>
                    <Col xs={6} className="text-start">
                        <h5>Rs. 725</h5>
                    </Col>
                </Row>
                <hr></hr>
                {/* Payment Information */}
                <div>
                    <p>Payment Method: Cash/Online</p>
                    <p>Change Due: $0</p>
                </div>

                {/* Footer */}
                <div className="mt-4">
                    <p className="text-center">Thank you for dining with us!</p>
                    <p className="text-center">Visit our website: www.restaurant.com</p>
                    <p className="text-center">Follow us on social media: @restaurant</p>
                    <p className="text-center">Special offers for future visits!</p>
                </div>
            </Container>
        </>
    )
}

export default BillPage;
