import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TambahPreferensiPopupForm from "../../Components/TambahPreferensiPopupForm";
import MyPreferenceList from "./MyPreferenceList";
import React, { useEffect, useState } from "react";

import { getUser, getUserPreferenceList } from "../../API/api";

function MyProfilePage() {

  const countSizePreference = 8;

  // user profile
  const [userProfile, setUserProfile] = useState({});
  useEffect(() => {
    let mounted = true;
    getUser().then(results => {
      if (mounted) {
        setUserProfile(results.data[0])
      }
    })
    return () => mounted = false;
  }, [])

  return (
    <Container fluid={true} style={{ paddingTop: "70px" }}>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="biodata" title="Biodata">
          <Row>
            <Col xs={4}>
              Gambar buyer
            </Col>
            <Col xs={8}>
              <p>Nama: {userProfile["username"]}</p>
              <p>Tanggal Lahir: {userProfile["born_date"]}</p>
              <p>Jenis Kelamin: {userProfile["gender"]}</p>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="alamat" title="Alamat">
          <h1>Alamat: Konohagakure</h1>
        </Tab>
        <Tab eventKey="rekeningbank" title="Rekening Bank">
          <h1>Bank: BCA</h1>
          <h1>No Rek: 525123456789</h1>
        </Tab>
        <Tab eventKey="preferensi" title="Preferensi Shoe Size">
          <Row>
            <h1>Preferensi Shoe Size</h1>

            <p>Anda telah mendaftarkan {countSizePreference} preferensi shoe size</p>

            <TambahPreferensiPopupForm />
          </Row>
          <Row>
            <MyPreferenceList />
          </Row>
        </Tab>
      </Tabs>

    </Container>
  );
}

export default MyProfilePage;