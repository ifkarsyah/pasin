import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StarRating from "../../Components/StarRating";
import Image from "react-bootstrap/Image";
import ChooseSizeForm from "./ChooseSizeForm";
import TambahPreferensiPopupForm from "../../Components/TambahPreferensiPopupForm";
import RecommendSize from "./RecommendSize";

import { getProductOne, getSizeListByBrandId } from "../../API/api";

function ProductDetailPage() {
  const { productId } = useParams();

  // set productOne
  const [productOne, setProductOne] = useState({});
  const [sizeList, setSizeList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getProductOne(productId)
      .then(result => {
        if (mounted) {
          setProductOne(result.data[0]);
          setSizeList(result.data[0]["size_list"]);
        }
      })
    return () => mounted = false;
  }, []);

  return (
    <Container fluid={true} style={{ paddingTop: "70px" }}>
      <Row>
        {/* Kiri -> Gambar*/}
        <Col xs={4}>
          <Image src={productOne["photo"]} rounded fluid style={{ width: "354px" }} />
        </Col>

        {/* Tengah -> Info2 */}
        <Col xs={4} className="d-flex flex-column justify-content-center">
          <h3 className="font-weight-bolder">{productOne["name"]}</h3>
          <StarRating rating={4.8} />
          <h3>Rp. {productOne["price"]}</h3>
          <p>{productOne["description"]}</p>
          {/* <p>{productOne["size_list"][0]["name"]}</p> */}
        </Col>

        {/* Kanan -> Form */}
        <Col xs={4}>
          <ChooseSizeForm sizeList={sizeList} />

          <Container fluid={true} className="d-flex justify-content-between">
          </Container>
        </Col>

      </Row>

    </Container >
  );
}

export default ProductDetailPage;