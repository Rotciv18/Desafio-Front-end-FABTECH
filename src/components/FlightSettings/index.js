import React, { Component } from "react";

import { Container } from "./styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Button from "../Button";

class FlightSettings extends Component {
  state = {};

  render() {
    return (
      <Container>
        <div className="originAndDestiny">
          <div className="origin">
            <h3>Origem</h3>
            <div>
              <label>Cidade</label>
              <input type="text" name="city" />
            </div>
            <div>
              <label>Estado</label>
              <input type="text" name="state" />
            </div>
            <div>
              <label>País</label>
              <input type="text" name="country" />
            </div>
            <div>
              <label>CEP</label>
              <input type="text" name="cep" />
            </div>
          </div>

          <div className="destiny">
          <h3>Destino</h3>
            <div>
              <label>Cidade</label>
              <input type="text" name="city" />
            </div>
            <div>
              <label>Estado</label>
              <input type="text" name="state" />
            </div>
            <div>
              <label>País</label>
              <input type="text" name="country" />
            </div>
            <div>
              <label>CEP</label>
              <input type="text" name="cep" />
            </div>
          </div>
        </div>
        <div className="datepicker">
          <div>
            <DatePicker
              className="datepicker"
              showTimeSelect
              timeIntervals={15}
              timeFormat="HH:mm"
              shouldCloseOnSelect={true}
              dateFormat="dd/MM/yyyy HH:mm:SS"
              inline
            />
          </div>
        </div>

        <div className="buttons">
          <Button label="Confirmar" handleClick />
          <Button label="Cancelar" handleClick={() => {}} />
        </div>
      </Container>
    );
  }
}

export default FlightSettings;
