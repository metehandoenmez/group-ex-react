# Getting started:
Fork, then clone this repository and run

    npm install

Inside the repository.

Run:

    npm run dev

This will start your react app.
React app will run on **localhost:3000**.

## Start editing the **src/app.jsx** file.

In index.js, import BrowserRouter, and wrap the <App> component in a <BrowserRouter> component.

In the App component, import Routes, Route and Link from the react-router-dom package.

Create two routes, one for the CardComponent, one for the NumberDisplay component. /card path for the card, /number for the number component.

Create a new component called WelcomeComponent, that just displays a "Welcome!" in a p tag. Route this to the "/" path.

Add Links for each of these routes.

Create another component called NotFound, which will route to the path "*". Just display "Not found" in a p tag in that component.
 If the user goes to any other route than the ones that have a specific component for them, then react router will display that component for them.
