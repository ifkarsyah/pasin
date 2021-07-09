import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { react, useState } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

function RecommendSize() {

  // modal handling
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  // other option handling

  return (
    <>
      <Button variant="primary" onClick={handleModalShow}>
        Recommend Size
      </Button>

      <Modal show={showModal} onHide={handleModalClose}>

        <Modal.Header closeButton>
          <Modal.Title>
            Tambah Preferensi Ukuran
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Berdasarkan kan ...

        </Modal.Body>

        <Modal.Footer>


        </Modal.Footer>

      </Modal>

    </>
  );
}

export default RecommendSize;