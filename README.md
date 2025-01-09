Hospital Management System

This project is a Hospital Management System built using the MERN Stack (MongoDB, Express, React, Node.js). The system helps users find nearby hospitals, store and manage health data, access health records, and book appointments with healthcare providers. It integrates multiple APIs for mapping, authentication, healthcare data management, and scheduling.

Directory Structure

└── Shivam3445-HospitalManagement/
    ├── package.json
    ├── server.js
    ├── client/
    │   ├── README.md
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── .env
    │   ├── .gitignore
    │   ├── public/
    │   │   ├── index.html
    │   │   ├── manifest.json
    │   │   ├── robots.txt
    │   │   └── assets/
    │   │       └── images/
    │   └── src/
    │       ├── App.css
    │       ├── App.js
    │       ├── App.test.js
    │       ├── index.css
    │       ├── index.js
    │       ├── reportWebVitals.js
    │       ├── setupTests.js
    │       ├── components/
    │       │   ├── AppointmentBooking/
    │       │   ├── NearByLocation/
    │       │   └── shared/
    │       ├── pages/
    │       │   ├── HomePage.js
    │       │   └── auth/
    │       │       ├── Login.js
    │       │       └── Register.js
    │       ├── redux/
    │       │   ├── store.js
    │       │   └── features/
    │       │       └── auth/
    │       │           ├── authAction.js
    │       │           └── authSlice.js
    │       └── services/
    │           ├── API.js
    │           └── authservice.js
    ├── config/
    │   └── db.js
    ├── controller/
    │   ├── authController.js
    │   └── testController.js
    ├── middlewares/
    │   └── authMiddleware.js
    ├── models/
    │   └── userModel.js
    └── routes/
        ├── authRoutes.js
        └── testRoutes.js
Features

1. Nearby Hospital Locator
Feature: Displays nearby hospitals based on the user’s current location on an interactive map.
Details Provided: Hospital name, address, and contact information.
API Integration:
Geoapify for fetching nearby hospitals based on the user’s location.
Nominatim for retrieving longitude and latitude.
OpenCage for displaying hospital address using the obtained latitude and longitude.

2. User Login and Health Data Storage
Feature: Users can create accounts, log in, and securely store their health information.
Details Stored: Health data collected from various healthcare centers.
API Integration:
Health data management APIs for securely storing and managing health information.

3. Access to Health Records
Feature: Users can access their health records, including medical history, prescriptions, lab results, etc.

4. Appointment Scheduling
Feature: Users can book, reschedule, or cancel appointments with hospitals or healthcare providers.
Details: Displays available time slots and handles user preferences.
