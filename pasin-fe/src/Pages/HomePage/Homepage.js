import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom";
import ProductList from "./ProductList";
import './Homepage.css'
import { getUser } from "../../API/api";


export default function HomePage() {

  // user profile
  const [username, setUsername] = useState('defaultuser');
  useEffect(() => {
    let mounted = true;
    getUser()
      .then(results => {
        if (mounted) {
          setUsername(results.data[0]["username"])
        }
      })
    return () => mounted = false;
  }, [])

  const history = useHistory();

  return (
    // paddingTop: 70px => biar 
    <Container fluid={true} style={{ paddingTop: "70px" }}>
      <h3 className="mt-3 mb-4">
        <span>Hello, </span>
        <span className="username">{username}</span>
      </h3>
      <h5 className="mb-5">Menampilkan 10 produk</h5>

      <ProductList />

    </Container>
  );
}


