import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import  React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

// API
import { getBrandList, getSizeListByBrandId } from "../API/api";

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
          setBrandList(results.data)
        }
      })
    return () => mounted = false;
  }, [])

  // size dropdown handling
  const [sizeList, setSizeList] = useState([]);
  useEffect(() => {
    let mounted = true;
    getSizeListByBrandId(usBrand)
      .then(results => {
        if (mounted) {
          { console.log(results) }
          setBrandList(results.data)
        }
      })
    return () => mounted = false;
  }, [])

  // other option handling

  // user selection(us) input handling
  const [usBrand, setUsBrand] = useState('');
  const [usSize, setUsSize] = useState(0);

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
          <Form>

            <Form.Group controlId="Brand">
              <Form.Label>Brand</Form.Label>
              <Form.Control as="select" onChange={e => setUsBrand(e.target.value)}>
                <option selected disabled>Pilih Brand</option>
                {console.log("aaaaaaaa")}
                {console.log(brandList)}
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
                <option>35</option>
                <option>36</option>
                <option>37</option>
                <option>38</option>
                <option>39</option>
                <option>40</option>
                <option>41</option>
                <option>42</option>
                <option>43</option>
                <option>44</option>
                <option>45</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="LooseySize">
              <Form.Label>Loosey Size (cm)</Form.Label>
              <Form.Control type="number" />
            </Form.Group>

          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Tutup
          </Button>
          <Button variant="primary" onClick={handleModalClose}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>

    </React.Fragment>
  );
}

export default TambahPreferensiPopupForm;