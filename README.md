# Hall Booking System

This is a Hall Booking System, a simple web application for managing room bookings in a hall or meeting space.

## Features

- Create rooms with details like room name, seats, amenities, and price per hour.
- Book rooms for specific dates and times, providing customer name, date, start time, end time, and room ID.
- View a list of all available rooms and their booking status.
- View a list of all customer bookings and booking history.

##API Endpoints
 Create a new room - /room/createRoom (POST)
 Get a list of all available rooms- /room/getAllRooms (GET)
 Book a room - /room/bookRoom (POST)
 Get a list of all booked rooms - /room/getAllBookedRoom (GET)
 Get a list of all customer bookings - /room/getAllCustomerData (GET)
 Get booking history for a specific customer - /room/customerBookingHistory/:customerName (GET)

