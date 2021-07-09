import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';

function ChooseSizeForm() {

  return (
    <Card>
      <Card.Body>
        <Form>
          <Form.Group controlId="Size">
            <Form.Label>Size</Form.Label>
            <Form.Control as="select">
              <option selected disabled>Pilih size</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>

          <p>Bingung ukuran yang pas untuk kamu? Kamu bisa
            <strong> pasin ukuran</strong> agar kami bisa milihin buat mu.
          </p>

          <Row>
            <Col>
              <Button variant="outline-success" size="lg" type="submit">
                Beli
              </Button>
            </Col>
            <Col>
              <Button variant="success" size="lg" type="submit">
                +Keranjang
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default ChooseSizeForm;