import React from "react";
import { Link, useParams } from "react-router-dom";

import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../../components/rating/rating.component";
import products from "../../products";

const ProductPage = () => {
  // Before we set up the back end
  const { id } = useParams();
  console.log(id);
  const product = products.find((p) => p._id === id);
  return (
    <>
      <Link className="btn btn-light  my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col lg="4">
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col lg="5">
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </ListGroup.Item>
            <ListGroup.Item>Price: {product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg="3">
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price: </Col>
                  <Col>
                    <strong>{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status: </Col>
                  <Col>
                    {product.countInStock
                      ? `${product.countInStock} in stock`
                      : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className="text-center">
                <Button
                  className="btn btn-dark w-100"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add TO CART
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductPage;
