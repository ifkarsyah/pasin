import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

function ChooseSizeForm() {
  return (
    <div className="form-wrapper">
      <Form>
        <Form.Group controlId="Ukuran">
          <Form.Label>Ukuran</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <p>Bingung ukuran yang pas untuk kamu? Klik
          <strong> di sini</strong> agar kami bisa milihin buat mu.
        </p>

        <Button variant="success" size="lg" block="block" type="submit">
          Create Student
        </Button>
      </Form>
    </div>);
}

export default ChooseSizeForm;