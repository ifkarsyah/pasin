import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { react, useState } from "react";
import Form from 'react-bootstrap/Form';

function PopupModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Pasin Ukuran
      </Button>

      <Modal show={show} onHide={handleClose}>
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
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="Size">
              <Form.Label>Size</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            {/* Kalo brand baru */}
            <h3>Muncul Kalau milih other(brand baru)</h3>
            <Form.Group controlId="Nama Brand Baru">
              <Form.Label>Nama Brand Baru</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="Size">
              <Form.Label>Size</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="Panjang">
              <Form.Label>Panjang</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

export default PopupModal;