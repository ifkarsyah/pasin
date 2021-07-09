import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { react, useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

// API
import { getBrandList } from "../API/getProductList";

function TambahPreferensiPopupForm() {

  // modal handling
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  // brand dropdown handling
  const [brandList, setBrandList] = useState([]);
  useEffect(() => {
    let mounted = true;
    getBrandList()
      .then(results => {
        if (mounted) {
          console.log("aaaaaaa")
          console.log(results)
          setBrandList(results.data)
        }
      })
    return () => mounted = false;
  }, [])

  // size dropdown handling
  const [sizeList, setSizeList] = useState([]);

  // other option handling

  // user selection(us) input handling
  const [usBrand, setUsBrand] = useState('');
  const [usSize, setUsSize] = useState(0);

  return (
    <>
      <Button variant="primary" onClick={handleModalShow}>
        + Preferensi Size
      </Button>

      <Modal show={showModal} onHide={handleModalClose}>

        <Modal.Header closeButton>
          <Modal.Title>
            Tambah Preferensi Ukuran
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="Jenis">
              <Form.Label>Jenis</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="Brand">
              <Form.Label>Brand</Form.Label>
              <Form.Control as="select" onChange={e => setUsBrand(e.target.value)}>
                <option selected disabled>Pilih Brand</option>
                {brandList.map(brand =>
                  <option key={brand["brand_id"]} >{brand["name"]}</option>
                )}
                <option>Other</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="Size">
              <Form.Label>Size</Form.Label>
              <Form.Control as="select">
                <option selected disabled>Pilih size</option>
                {}
              </Form.Control>
            </Form.Group>

            {/* Kalo brand baru */}
            {/* <h3>Tambah Brand Baru</h3>
            <Form.Group controlId="Nama Brand Baru">
              <Form.Label>Nama Brand Baru</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Row>
              <Col>
                <Form.Group controlId="Size">
                  <Form.Label>Size</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="Panjang">
                  <Form.Label>Panjang</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Col>
            </Form.Row> */}

          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModalClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

export default TambahPreferensiPopupForm;