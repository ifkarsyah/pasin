import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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

          <p>Bingung ukuran yang pas untuk kamu? Klik
            <strong> di sini</strong> agar kami bisa milihin buat mu.
          </p>

          <Button variant="success" size="lg" block="block" type="submit">
            Beli
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default ChooseSizeForm;