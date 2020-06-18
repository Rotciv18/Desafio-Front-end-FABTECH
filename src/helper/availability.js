import {
  parse, getDay, getMonth, isEqual,
} from 'date-fns';

export const checkFlightAvailability = (selectedFlight, flights) => {
  let error = null;

  flights.every((flight) => {
    if (
      flight.date === selectedFlight.date
      && flight.id !== selectedFlight.id
    ) {
      error = 'Já existe um vôo para este horário!';
      return false;
    }

    const selectedFlightDate = parse(
      selectedFlight.date,
      'dd/MM/yyyy HH:mm:SS',
      new Date(),
    );
    const flightDate = parse(flight.date, 'dd/MM/yyyy HH:mm:SS', new Date());
    const isDateEqual = isEqual(selectedFlightDate, flightDate);

    // Bem eu não conheço uma cidade com mais de um aeroporto
    if (flight.destiny.city === selectedFlight.destiny.city && isDateEqual) {
      error = `Já existe um vôo para ${flight.destiny.city} na data ${getDay(
        flightDate,
      )}/${getMonth(flightDate)}`;
      return false;
    }

    return true;
  });

  return error;
};
