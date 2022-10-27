import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import api from './api';


export default function App() {

  const [pais, setPais] = useState([]);
  const [cidade, setCidade] = useState([]);

  useEffect(() => {

    getPais();
    getCidade();

 }, [])

function getPais() {
  api.get('/country').then((response) => setPais(response.data))
    .catch((err) => {
      console.log(err);
    })
  }

  function getCidade() {
    api.get('/city').then((response) => setCidade(response.data))
      .catch((err) => {
        console.log(err);
      })
    }
  

  return (
    <div className="App">
      <div className="mt-3">
        <Container>
          <h6 className="font-weight-bold" class="text-primary">DESTINOS DE INTERESSE</h6>
          <Form >

            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">Nome</Form.Label>
              <Form.Control id="disabledTextInput" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">Email</Form.Label>
              <Form.Control id="disabledTextInput" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">Telefone</Form.Label>
              <Form.Control id="disabledTextInput" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">CPF</Form.Label>
              <Form.Control id="disabledTextInput" />
            </Form.Group>

            <br />
            <br />

            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledSelect">País</Form.Label>
              <Form.Select id="disabledSelect">
            {pais.map((pa)=> (
                <option key={pa.code}>{pa.name}</option>
             ))}

              </Form.Select>
            </Form.Group>

            
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledSelect">Cidade</Form.Label>
              <Form.Select id="disabledSelect">
            {cidade.map((cida)=> (
                <option key={cida.id}>{cida.name}</option>
             ))}

              </Form.Select>
            </Form.Group>
            

          </Form>
        </Container >
      </div>

    </div>
  );
}
