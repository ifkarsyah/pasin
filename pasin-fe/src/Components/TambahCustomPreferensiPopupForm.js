import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

// API
import { customPreference } from "../API/api";

function TambahCustomPreferensiPopupForm(props) {

  // modal handling
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  // handleSubmit
  const handleSubmit = (e) => {
    const params = {
      "length": usLength,
      "loosey_size": usLooseySize,
    }
    customPreference(params)
      .then(results => {
        if (results.status == 200) {
          setShowModal(false)
          window.location.href = '/'
        } else {
          setShowModal(false)
        }
      })
  };


  // user selection(us) input handling
  const [usLength, setUsLength] = useState(0);
  const [usLooseySize, setUsLooseySize] = useState();


  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleModalShow}>
        + Preferensi Size
      </Button>

      <Modal show={showModal} onHide={handleModalClose}>

        <Modal.Header closeButton>
          <Modal.Title>
            Tambah Custom Preferensi Ukuran
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>

            <Form.Group controlId="Length">
              <Form.Label>Length (cm)</Form.Label>
              <Form.Control type="number" onChange={e => setUsLength(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="LooseySize">
              <Form.Label>Loosey Size (cm)</Form.Label>
              <Form.Control type="number" onChange={e => setUsLooseySize(e.target.value)} />
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Tutup
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>

    </React.Fragment>
  );
}

export default TambahCustomPreferensiPopupForm;