# Getting started:
Fork, then clone this repository and run

    npm install

Inside the repository.

Run:

    npm run dev

This will start your react app.
React app will run on **localhost:3000**.

## Start editing the **src/app.jsx** file.



 - Create a new component called `NumberDisplay`, and render only this component in App.jsx
 - In the `NumberDisplay` component, create a state variable called `number`.
 - Fetch the number from an API when the component mounts. Update the `number` state with the fetched value.
 - Render the `number` state variable within the `NumberDisplay` component, in a p tag
 - Create a button within the `NumberDisplay` component labeled "Increment".
 - When we click on the Increment button, we increment the number value with +1
 - Create a button called "Save to storage".
 - When user clicks on Save, save the number to localstorage
 - Create a button called "Load from storage".
 - When user clicks on the load button, retrieve the saved number from localStorage and update the `number` state if a value exists when the "Load from LocalStorage" button is clicked.

