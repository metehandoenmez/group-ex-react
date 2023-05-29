# Getting started:
Fork, then clone this repository and run

    npm install

Inside the repository.

Run:

    npm run dev

This will start your react app.
React app will run on **localhost:3000**.

## Start editing the **src/app.jsx** file.

Add a state variable called "items", which is an arrray.
Add a state variable called "inputText", which is a string.

Add an input tag to the App component.
Save the text we input in that input tag in "inputText".

Add a button called "Add item". When pressed, it will add the text in "items".

Use items.map() in the App's render functionality, to render a card component for each item in the items.
Give each card component a "key" property

Add a Delete Me button in the card components, that when clicked will delete that item from the list.
Make it so this updates the "items" state variable, and update that variable so that it re-renders our list of cards, with the proper card updated.

Optional:

Make it so the text is rendered in an input tag, and whenever we edit that text, it also updates the "items".

Save and load the "items" from localStorage, using useEffect() or componentDidMount().

