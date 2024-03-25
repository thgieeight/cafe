import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav, Table, Row, Col } from 'react-bootstrap';

const OrderPage=()=>{
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
            <Container>
                <Row className='text-center my-3'>
                    <h3>My Order</h3>
                </Row>
            </Container>

            <Table striped bordered hover>
                <thead>
                    <tr className='text-center'>
                        <th>Sn.</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='text-center'>
                        <td>1</td>
                        <td>Momo</td>
                        <td>200</td>
                        <td>3</td>
                        <td>Ready</td>
                    </tr>
                    <tr className='text-center'>
                        <td>2</td>
                        <td>Pizza</td>
                        <td>700</td>
                        <td>1</td>
                        <td>Cooking</td>
                    </tr>
                    <tr className='text-center'>
                        <td>3</td>
                        <td>fr. Rice</td>
                        <td>400</td>
                        <td>2</td>
                        <td>Finish</td>
                    </tr>
                    <tr className='text-center' >
                        <td>4</td>
                        <td>Dosa</td>
                        <td>700</td>
                        <td>2</td>
                        <td>Served</td>
                    </tr>
                </tbody>
            </Table>
    </>)
}

export default  OrderPage;