import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { handleAddToCart } from "../../Utilities/Functions";
import OrderSummery from "../OrderSummery/OrderSummery";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("data/products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <Container>
            <Row>
                <Col className="products mt-4">
                    {products.map((product) => (
                        <Product key={product.id} handleAddToCart={handleAddToCart} product={product}></Product>
                    ))}
                </Col>
                <Col className="order-summery" lg={3}>
                    <OrderSummery></OrderSummery>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;
