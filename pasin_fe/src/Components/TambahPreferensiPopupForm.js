import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import TambahCustomPreferensiPopupForm from "./TambahCustomPreferensiPopupForm";

// API
import { getBrandList, getSizeListByBrandId, addPreference } from "../API/api";

function TambahPreferensiPopupForm(props) {

  // modal handling
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  // handleSubmit
  const handleSubmit = (e) => {
    // setShowModal(false)
    // console.log(e.target.value);
    // console.log(usBrand);
    // console.log(usSize);
    // console.log(usLooseySize);
    // console.log(sizeList);
    const params = {
      "brand_id": usBrandId, // todo
      "size": usSize,
      "loosey_size": usLooseySize,
    }
    console.log("paraaams")
    console.log(params);
    addPreference(params)
      .then(results => {
        if (results.status == 200) {
          setShowModal(false)
          window.location.href = '/'
        } else {
          setShowModal(false)
        }
      })
  };

  // brand dropdown handling
  const [brandList, setBrandList] = useState([]);
  useEffect(() => {
    let mounted = true;
    getBrandList()
      .then(results => {
        if (mounted) {
          setBrandList(results.data)
        }
      })
    return () => mounted = false;
  }, [])

  // size dropdown handling
  const [sizeList, setSizeList] = useState([]);
  const getSizeList = (brandId) => {
    getSizeListByBrandId(brandId)
      .then(results => {
        setUsBrandId(brandId)
        setSizeList(results.data)
      })
  }

  const handleChange = (e) => {
    if (e.target.value == 'Other') {
      setIsOtherSelected(true);
    } else {
      setUsBrand(e.target.value);
      getSizeList(e.target.options.selectedIndex);
    }
  }

  // other option handling
  const [isOtherSelected, setIsOtherSelected] = useState();


  // user selection(us) input handling
  const [usBrand, setUsBrand] = useState('');
  const [usBrandId, setUsBrandId] = useState(0);
  const [usSize, setUsSize] = useState(0);
  const [usLooseySize, setUsLooseySize] = useState();


  return (
    <React.Fragment>
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
          <Form onSubmit={handleSubmit}>

            <Form.Group controlId="Brand">
              <Form.Label>Brand</Form.Label>
              <Form.Control as="select" onChange={e => handleChange(e)}>
                <option selected disabled>Pilih Brand</option>
                {brandList.map(brand =>
                  <option key={brand["brand_id"]} >{brand["name"]}</option>
                )}
                <option>Other</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="Size">
              <Form.Label>Size</Form.Label>
              <Form.Control as="select" onChange={e => setUsSize(e.target.value)}>
                <option selected disabled>Pilih size</option>
                {sizeList.map(ele =>
                  <option key={ele["bs_id"]}>{ele["size"]}</option>
                )}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="LooseySize">
              <Form.Label>Loosey Size (cm)</Form.Label>
              <Form.Control type="number" onChange={e => setUsLooseySize(e.target.value)} />
            </Form.Group>

            {isOtherSelected && <TambahCustomPreferensiPopupForm />}

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

export default TambahPreferensiPopupForm;