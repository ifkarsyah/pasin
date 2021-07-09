import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

import ProductCard from "./ProductCard";

let productListResults = [
  {
    "id": 1,
    "name": "Ceritanya sepatu yang bagus",
    "price": 1500,
    "rating": 4.8,
    "photo_url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  },
  {
    "id": 2,
    "name": "Ceritanya sepatu yang bagus",
    "price": 1500,
    "rating": 4.8,
    "photo_url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  },
  {
    "id": 3,
    "name": "Ceritanya sepatu yang bagus",
    "price": 1500,
    "rating": 4.8,
    "photo_url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  },
  {
    "id": 4,
    "name": "Ceritanya sepatu yang bagus",
    "price": 1500,
    "rating": 4.8,
    "photo_url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  },
  {
    "id": 5,
    "name": "Ceritanya sepatu yang bagus",
    "price": 1500,
    "rating": 4.8,
    "photo_url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  },
  {
    "id": 6,
    "name": "Ceritanya sepatu yang bagus",
    "price": 1500,
    "rating": 4.8,
    "photo_url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  },
  {
    "id": 7,
    "name": "Ceritanya sepatu yang bagus",
    "price": 1500,
    "rating": 4.8,
    "photo_url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  },
  {
    "id": 8,
    "name": "Ceritanya sepatu yang bagus",
    "price": 1500,
    "rating": 4.8,
    "photo_url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  },
  {
    "id": 9,
    "name": "Ceritanya sepatu yang bagus",
    "price": 1500,
    "rating": 4.8,
    "photo_url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  },
  {
    "id": 10,
    "name": "Ceritanya sepatu yang bagus",
    "price": 1500,
    "rating": 4.8,
    "photo_url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  },
  {
    "id": 1,
    "name": "Ceritanya sepatu yang bagus",
    "price": 1500,
    "rating": 4.8,
    "photo_url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  },
  {
    "id": 1,
    "name": "Ceritanya sepatu yang bagus",
    "price": 1500,
    "rating": 4.8,
    "photo_url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  },
  {
    "id": 1,
    "name": "contoh",
    "price": 1500,
    "rating": 4.8,
    "photo_url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  },
]


function ProductList() {
  const [productList, setProductList] = useState(productListResults);

  useEffect(() => {
    (async () => {
      setProductList(productListResults);
    })();
  }, []);

  return (
    <Container fluid={true} className="d-flex flex-wrap font-weight-bold">
      {productListResults.map(product =>
        <ProductCard key={product['id']} product={product}
        />)}
    </Container>
  );
}

export default ProductList;