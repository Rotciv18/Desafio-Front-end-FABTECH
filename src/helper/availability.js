import {
  parse, getDate, format, isSameDay,
} from 'date-fns';

export const checkFlightAvailability = (
  selectedFlight,
  flights,
  selectedFlightId,
) => {
  let error = null;
  console.log('oi');

  flights.every((flight) => {
    console.log(`${flight.id}, ${selectedFlightId}`);
    if (flight.date === selectedFlight.date && flight.id !== selectedFlightId) {
      error = 'Já existe um vôo para este horário!';
      return false;
    }

    const selectedFlightDate = parse(
      selectedFlight.date,
      'dd/MM/yyyy HH:mm:SS',
      new Date(),
    );
    const flightDate = parse(flight.date, 'dd/MM/yyyy HH:mm:SS', new Date());
    const isDateEqual = isSameDay(selectedFlightDate, flightDate);

    // Bem eu não conheço uma cidade com mais de um aeroporto
    if (
      flight.destiny.city === selectedFlight.destiny.city
      && isDateEqual
      && flight.id !== selectedFlightId
    ) {
      error = `Já existe um vôo para ${flight.destiny.city} na data ${format(flightDate, 'dd/MM')}`;
      return false;
    }

    return true;
  });

  return error;
};
