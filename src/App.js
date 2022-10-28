import './App.css';
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

      <div class="container">
        <div class=" text-center mt-3 ">

          <h1 class="text-primary" >DESTINOS DE INTERESSE</h1>

        </div>

        <div class="row ">
          <div class="col-lg-7 mx-auto">
            <div class="card mt-2 mx-auto p-4 bg-light">
              <div class="card-body bg-light">

                <div class="container">
                  <form id="contact-form" role="form">

                    <div class="controls">

                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="form_name">Nome</label>
                            <input id="form_name" type="text" name="name" class="form-control" placeholder="Please enter your name" required="required" data-error="Firstname is required." />

                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="form_lastname">Telefone</label>
                            <input id="form_lastname" type="number" name="surname" class="form-control" placeholder="Please enter your phone" required="required" data-error="Phone number is required." />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="form_email">Email</label>
                            <input id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email" required="required" data-error="Valid email is required." />

                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="form_need">CPF</label>
                            <input id="form_need" name="need" class="form-control" required="required" placeholder="Please enter your CPF"/>

                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">

                            <br/>

                            <Form.Group required="required" className="mb-3">
                              <Form.Label htmlFor="disabledSelect">País</Form.Label>
                              <Form.Select multiple aria-label="multiple select example" id="disabledSelect">
                                {pais.map((pa) => (
                                  <option key={pa.code}>{pa.name}</option>
                                ))}

                              </Form.Select>
                            </Form.Group>

                            <Form.Group required="required" className="mb-3">
                              <Form.Label htmlFor="disabledSelect">Cidade</Form.Label>
                              <Form.Select multiple aria-label="multiple select example" id="disabledSelect">
                                {cidade.map((cida) => (
                                  <option key={cida.id}>{cida.name}</option>
                                ))}

                              </Form.Select>
                            </Form.Group>

                          </div>

                        </div>

                      </div>

                    </div>
                  </form>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>

  );
}
