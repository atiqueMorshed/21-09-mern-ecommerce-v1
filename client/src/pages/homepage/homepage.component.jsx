import React from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../../components/product/product.component";

import products from "../../products";

const HomePage = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product key={product._id} product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
