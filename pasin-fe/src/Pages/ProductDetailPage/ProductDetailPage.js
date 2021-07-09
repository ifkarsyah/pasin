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

import { getProductOne } from "../../API/api";


// let productResult = {
//   "id": 1,
//   "name": "Ceritanya sepatu yang bagus",
//   "price": 1500,
//   "rating": 4.8,
//   "photo_url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
//   "detail": `
//   Hipzo Original Produk Kebanggaan anak bangsa dengan Kualitas International Model dan design Elegan dan Kekinian. Bahan Pilihan, Kualitas terjaga .

// Spesifikasi Produk :
// - Sepatu Hipzo M 039
// - Ready Size 39.40.41.42.43
// - Upper Webbing Tebal dan Kuat
// - Insole Karet Sponge Lentur & Nyaman

// Size Chart ;
// 39 (EU) - 5 (UK) - 25.8 cm
// 40 (EU) - 6 (UK) - 26.6 cm
// 41 (EU) - 7 (UK) - 27.1 cm
// 42 (EU) - 8 (UK) - 27.1 cm
// 43 (EU) - 9 (UK) - 27.9 cm
// 44 (EU) - 10 (UK) - 28.7 cm

// ========= KELEBIHAN TOKO KAMI ===========
// - Kualitas Terjamin Menggunakan Bahan No.1
// - Transaksi Aman & Tukar Ukuran Mudah - Pengiriman Cepat

// Langsung aja klik beli, sebelum kehabisan. Pilih ukuran yang diinginkan pada saat membeli.
// Harap DM atau hubungi Customer Service kami apabila ada kendala dalam pemesanan ataupun perihal ketersediaan stock.

// #sandal #sandalmurah #sandalwanita #sepatu #sepatumurah #sandalcewek #sandals #shoes #sendal #fashion #sepatucewek #sepatuwanita #flatshoes #wedges #sandalpria #sandaljepit #jualsandal #sandalkulit #sendalmurah #sandalcowok #sandalcantik #sandalanak #tas #heels #sneakers #sandalbranded #sandalkeren #sepatusandal #sandalkekinian
//   `
// }

function ProductDetailPage() {
  const { productId } = useParams();
  const [productOne, setProductOne] = useState({});

  useEffect(() => {
    let mounted = true;
    getProductOne(productId)
      .then(result => {
        if (mounted) {
          console.log(result);
          setProductOne(result);
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
          <p>{productOne["detail"]}</p>
        </Col>

        {/* Kanan -> Form */}
        <Col xs={4}>
          <ChooseSizeForm />

          <Container fluid={true} className="d-flex justify-content-between">
            <RecommendSize />
            <TambahPreferensiPopupForm />
          </Container>
        </Col>

      </Row>

    </Container >
  );
}

export default ProductDetailPage;