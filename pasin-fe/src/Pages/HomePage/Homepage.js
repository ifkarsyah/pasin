import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom";
import ProductList from "./ProductList"

export default function HomePage() {
  const [username, setUsername] = useState('');
  const history = useHistory();
  useEffect(() => {
    (async () => {
      try {
        setUsername("Madara");
      } catch (e) {
        history.push('/login');
      }
    })();
  }, []);

  return (
    // paddingTop: 70px => biar 
    <Container fluid={true} style={{ paddingTop: "70px" }}>
      <h3 className="mt-3 mb-4">
        <span>Hello, </span>
        <span className="text-primary">{username}</span>
      </h3>
      <h5 className="mb-5">Menampilkan 30 dari 900000 hasil</h5>

      <ProductList />

    </Container>
  );
}


