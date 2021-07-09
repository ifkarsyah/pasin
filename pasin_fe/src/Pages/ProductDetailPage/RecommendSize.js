import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { getRecommendedSize, getUserPreferenceList } from '../../API/api';


function RecommendSize(props) {

  // modal handling
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  // recommend
  const [recommendedSize, setRecommendedSize] = useState();
  useEffect(() => {
    let mounted = true;
    getRecommendedSize(props["productId"])
      .then(results => {
        if (mounted) {
          setRecommendedSize(results.data[0]["recommendation"])
        }
      })
    return () => mounted = false;
  }, [])

  return (
    <React.Fragment>
      <Button variant="success" onClick={handleModalShow}>
        <strong>pasin ukuran</strong>
      </Button>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Kami Merekomendasikan Kamu untuk Memilih Nomor ....
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Button variant="success" size="lg">
            <strong>41</strong>
          </Button>
          <p>
            Berdasarkan kan data preferensi yang sudah kamu ambil,
            kamu memiliki ukuran panjang kaki 28.5 cm.
            Oleh karena itu, kami sarankan buatmu untuk milih
            size <strong>41</strong> yang panjangnya 29 cm.
          </p>
        </Modal.Body>

        <Modal.Footer>


        </Modal.Footer>

      </Modal>

    </React.Fragment>
  );
}

export default RecommendSize;