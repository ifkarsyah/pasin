import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ChooseSizeForm() {
  return (
    <Card>
      <Card.Body>
        <Form>
          <Form.Group controlId="Ukuran">
            <Form.Label>Ukuran</Form.Label>
            <Form.Control type="text" />
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