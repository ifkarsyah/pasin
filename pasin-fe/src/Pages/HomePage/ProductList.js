import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

import ProductCard from "./ProductCard";

import { getProductList } from "../../API/getProductList";

let productListResults = []

function ProductList() {
  const [productList, setProductList] = useState(productListResults);

  useEffect(() => {
    let mounted = true;
    getProductList()
      .then(results => {
        if (mounted) {
          setProductList(results.data)
        }
      })
    return () => mounted = false;
  }, [])

  return (
    <Container fluid={true} className="d-flex flex-wrap font-weight-bold">
      {productList.map(product =>
        <ProductCard key={product['product_id']} product={product}
        />)}
    </Container>
  );
}

export default ProductList;