# Interview Scheduler

Interview Scheduler is a single page application built using React. Data is persisted by the API server using a PostgreSQL database with communication to the client application over HTTP (using JSON format). Building this app provided experience working with Webpack, Babel, Axios, Storybook, Jest, and Cypress.


## Setup

Install dependencies with `npm install`. Also requires an installed version of [scheduler-api](https://github.com/jbenson4/scheduler-api).

## Running API Server
Start the API server with `npm start` in the `scheduler-api` project directory. The server will be ran on <http://localhost:8001/>.

## Running Webpack Development Server
Start the React app with `npm start` in the `interview-scheduler` project directory. The app will be ran on <http://localhost:8000/>.

## Usage
Book, edit, and cancel some interviews!

## Dependencies

- Axios
- Classnames
- Normalize.css
- React
- React-DOM
- React-scripts

## App GIFs

Creating an interview

!["GIF of interview creation"](https://github.com/jbenson4/interview-scheduler/blob/master/docs/interview-creation.gif?raw=true)

Canceling an interview

!["GIF of interview cancelation"](https://github.com/jbenson4/interview-scheduler/blob/master/docs/interview-deletion.gif?raw=true)