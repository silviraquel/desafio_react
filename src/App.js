import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


function App() {

  const [pais, setPais] = useState('');
  const [cidade, setCidade] = useState('');

  

  return (
    <div className="App">
      <div Class="mt-3">
        <Container>
          <h6 className="font-weight-bold" class="text-primary">DESTINOS DE INTERESSE</h6>
          <Form >

              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledTextInput">Nome</Form.Label>
                <Form.Control id="disabledTextInput"  />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledTextInput">Email</Form.Label>
                <Form.Control id="disabledTextInput" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledTextInput">Telefone</Form.Label>
                <Form.Control id="disabledTextInput"/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledTextInput">CPF</Form.Label>
                <Form.Control id="disabledTextInput"/>
              </Form.Group>

              <br />
              <br />

              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledSelect">País</Form.Label>
                <Form.Select id="disabledSelect">
                  <option>1</option>
                </Form.Select>
              </Form.Group>


              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledSelect">Cidade</Form.Label>
                <Form.Select id="disabledSelect">
                  <option>2</option>
                </Form.Select>
              </Form.Group>

          </Form>
        </Container >
      </div>

    </div>
  );
}

export default App;
