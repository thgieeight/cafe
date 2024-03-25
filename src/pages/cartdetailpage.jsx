import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav, Image, Button, Row, Col } from 'react-bootstrap';

const CartDetailPage = () => {
    const initialItems = [
        { name: 'Veg Chowmin with extra sauce', quantity: 0 },
        { name: 'Chicken fried Momo with extra spice', quantity: 0 },
        { name: 'Veg Burger with extra Cheese', quantity: 0 }
    ];

    const [items, setItems] = useState(initialItems);

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('cartItems'));
        if (storedItems) {
            setItems(storedItems);
        }
    }, []);

    const updateLocalStorage = (updatedItems) => {
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    };

    const incrementQuantity = (index) => {
        const updatedItems = [...items];
        updatedItems[index].quantity += 1;
        setItems(updatedItems);
        updateLocalStorage(updatedItems);
    };

    const decrementQuantity = (index) => {
        const updatedItems = [...items];
        if (updatedItems[index].quantity > 0) {
            updatedItems[index].quantity -= 1;
            setItems(updatedItems);
            updateLocalStorage(updatedItems);
        }
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

            <Container className='mt-3'>
                {items.map((item, index) => (
                    <Row key={index} className='my-2'>
                        <Col sm={5} xs={5}>
                            <Image src="https://placehold.jp/120x120.png" className='rounded' />
                        </Col>
                        <Col sm={7} xs={7}>
                            <h5>{item.name}</h5>
                            <div>
                                <Button onClick={() => decrementQuantity(index)}>-</Button>
                                <span className='mx-3'>{item.quantity}</span>
                                <Button onClick={() => incrementQuantity(index)}>+</Button>
                            </div>
                        </Col>
                    </Row>
                ))}
            </Container>

            <div className='text-center my-5'>
                <Button>Order Now</Button>
            </div>
        </>
    );
}

export default CartDetailPage;
