import { Container, Table } from 'react-bootstrap';

function Horario() {
  return (
    <Container className="py-5 mt-5">
      <h2>Horario de Atención</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Día</th>
            <th>Horario</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lunes a Viernes</td>
            <td>9:00 AM - 6:00 PM</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Horario;
