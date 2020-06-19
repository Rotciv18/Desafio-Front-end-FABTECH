# FlightTracks
A simple front-end that handles a CRUD of flights, displaying origin, destiny and date.

## How to run

Install all dependencies:
### `yarn`

Run json-server to simulate running API for the front-end:
### `yarn json-server server.json --p port`

The server.json file should have the "flights" list in it.

Run the application:
### `yarn start`

## What it does

The app lists all registered flights, register new ones, update them and remove them. It must attend to the following rules: </br>
• The user can't register a new flight (or update an existing one) if there is one flight of the same destiny and the same day. </br>
• The user may not register a new flight (or update an existing one) if there is any other flight that has the same date and hour.
