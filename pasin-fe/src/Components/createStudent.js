import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

function CreateStudent() {
  return (<div className="form-wrapper">
    <Form>
      <Form.Group controlId="Name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group controlId="Email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" />
      </Form.Group>

      <Form.Group controlId="Jurusan">
        <Form.Label>Jurusan</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Button variant="danger" size="lg" block="block" type="submit">
        Create Student
      </Button>
    </Form>
  </div>);
}

export default CreateStudent;