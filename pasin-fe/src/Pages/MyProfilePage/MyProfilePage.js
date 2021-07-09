import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TambahPreferensiPopupForm from "../../Components/TambahPreferensiPopupForm";
import MyPreferenceList from "./MyPreferenceList";

function MyProfilePage() {

  const countSizePreference = 8


  return (
    <Container fluid={true} style={{ paddingTop: "70px" }}>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="biodata" title="Biodata">
          <Row>
            <Col xs={4}>
              Gambar buyer
            </Col>
            <Col xs={8}>
              <p>Nama: Ghazi Muharram</p>
              <p>Tanggal Lahir: 20 April 2000</p>
              <p>Jenis Kelamin: Pria</p>
              <p>Email: madara@uchiha.com</p>
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