import React, { Component } from "react";

import { Container } from "./styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { parse, isAfter } from "date-fns";

import Button from "../Button";

class FlightSettings extends Component {
  state = {
    id: "",
    originCity: "",
    originState: "",
    originCountry: "",
    originCep: "",
    destinyCity: "",
    destinyState: "",
    destinyCountry: "",
    destinyCep: "",
    date: "",
    dateString: "",
  };

  componentDidMount() {
    const { flight } = this.props;

    if (flight) {
      const { origin, destiny, id, date } = flight;

      this.setState({
        id,
        originCity: origin.city,
        originState: origin.state,
        originCountry: origin.country,
        originCep: origin.cep,
        destinyCity: destiny.city,
        destinyState: destiny.state,
        destinyCountry: destiny.country,
        destinyCep: destiny.cep,
        dateString: date,
        date: parse(date, "dd/MM/yyyy HH:mm:SS", new Date()),
      });
    }
  }

  checkAllInputs = () => {
    const {
      originCity,
      originState,
      originCountry,
      originCep,
      destinyCity,
      destinyState,
      destinyCountry,
      destinyCep,
      date,
    } = this.state;

    return (
      originCity &&
      originState &&
      originCountry &&
      originCep &&
      destinyCity &&
      destinyState &&
      destinyCountry &&
      destinyCep &&
      date
    );
  };

  checkDestination = () => {
    const {
      originCity,
      originState,
      originCountry,
      originCep,
      destinyCity,
      destinyState,
      destinyCountry,
      destinyCep,
    } = this.state;

    return (
      originCity === destinyCity &&
      originState === destinyState &&
      originCountry === destinyCountry &&
      originCep === destinyCep
    );
  };

  handleChangeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleDateChange = (date) => {
    this.setState({
      date,
      dateString: `${date.toLocaleString()}`,
    });
    console.log(this.state.dateString);
  };

  buildFlight = () => {
    const {
      originCity,
      originState,
      originCountry,
      originCep,
      destinyCity,
      destinyState,
      destinyCountry,
      destinyCep,
      dateString,
    } = this.state;

    return {
      origin: {
        city: originCity,
        state: originState,
        country: originCountry,
        cep: originCep,
      },
      destiny: {
        city: destinyCity,
        state: destinyState,
        country: destinyCountry,
        cep: destinyCep,
      },
      date: dateString,
    };
  };

  isDateOk = () => {
    const {date} = this.state;

    return isAfter(date, new Date());
  }

  submit = () => {
    const { id } = this.state;
    const isAllFilled = this.checkAllInputs();
    const isSameOriginAndDestiny = this.checkDestination();

    if (isAllFilled) {
      if (!isSameOriginAndDestiny) {
        if (this.isDateOk()) {
          const { handleSubmit } = this.props;
          const flight = this.buildFlight();

          handleSubmit(flight, id);
        } else {
          alert("Não é possível cadastrar um vôo para uma data que já passou");
        }
      } else {
        alert("Destino não pode ser o mesmo que origem");
      }
    } else {
      alert("Preencha todos os campos!");
    }
  };

  render() {
    const {
      originCity,
      originState,
      originCountry,
      originCep,
      destinyCity,
      destinyState,
      destinyCountry,
      destinyCep,
      date,
    } = this.state;

    const { handleCancel } = this.props;

    return (
      <Container>
        <div className="originAndDestiny">
          <div className="origin">
            <h3>Origem</h3>
            <div>
              <label>Cidade</label>
              <input
                type="text"
                name="originCity"
                value={originCity}
                onChange={this.handleChangeInput}
              />
            </div>
            <div>
              <label>Estado</label>
              <input
                type="text"
                name="originState"
                value={originState}
                onChange={this.handleChangeInput}
              />
            </div>
            <div>
              <label>País</label>
              <input
                type="text"
                name="originCountry"
                value={originCountry}
                onChange={this.handleChangeInput}
              />
            </div>
            <div>
              <label>CEP</label>
              <input
                type="text"
                name="originCep"
                value={originCep}
                onChange={this.handleChangeInput}
              />
            </div>
          </div>

          <div className="destiny">
            <h3>Destino</h3>
            <div>
              <label>Cidade</label>
              <input
                type="text"
                name="destinyCity"
                value={destinyCity}
                onChange={this.handleChangeInput}
              />
            </div>
            <div>
              <label>Estado</label>
              <input
                type="text"
                name="destinyState"
                value={destinyState}
                onChange={this.handleChangeInput}
              />
            </div>
            <div>
              <label>País</label>
              <input
                type="text"
                name="destinyCountry"
                value={destinyCountry}
                onChange={this.handleChangeInput}
              />
            </div>
            <div>
              <label>CEP</label>
              <input
                type="text"
                name="destinyCep"
                value={destinyCep}
                onChange={this.handleChangeInput}
              />
            </div>
          </div>
        </div>
        <div className="datepicker">
          <div>
            <DatePicker
              className="datepicker"
              showTimeSelect
              timeIntervals={30}
              dateFormat="dd/MM/yyyy HH:mm:SS"
              timeFormat="HH:mm"
              inline
              onChange={this.handleDateChange}
              selected={date}
            />
          </div>
        </div>

        <div className="buttons">
          <Button label="Confirmar" handleClick={this.submit} />
          <Button label="Cancelar" handleClick={() => handleCancel()} />
        </div>
      </Container>
    );
  }
}

export default FlightSettings;
