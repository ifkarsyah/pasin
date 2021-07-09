import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import ProductDetailSection from "./ProductDetailSection";

function ProductDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return <p>Loading...</p>
  }

  return (
    <Container fluid={true}>

      <Row className="mb-5">
        <ProductDetailSection product={product} />
        <p>hhhhh</p>
      </Row>

      <Row className="justify-content-between">

        <Col xs={7}>
          <productScheduleList productId={productId} productReleaseDate={product['release_date']} title={product['title']} />
        </Col>

        <Col xs={5}>
          <Card style={{ border: '3px solid #d9d9d9' }}>
            <Card.Body className="bg-white">
              <h4 className="font-weight-bold text-center">...</h4>

            </Card.Body>
          </Card>

        </Col>
      </Row>

    </Container>
  );
}

export default ProductDetailPage;