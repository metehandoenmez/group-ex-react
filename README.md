# Getting started:
Fork, then clone this repository and run

    npm install

Inside the repository.

Run:

    npm run dev

This will start your react app.
React app will run on **localhost:3000**.

## Start editing the **src/app.jsx** file.

Create a div tag in the render function of your App component.

Create another component called CardComponent, in the file CardComponent.jsx, which will render:
- a div tag
  - an h3 tag, with text "Card title"
  - an h5 tag, with text "Card subtitle"
  - a p tag, with filler text
  - a break tag
  - a button called "Press me"

Import this component in your App component, and use it 3 times in the App render function.

Now create three props for this CardComponent, called "title", "subtitle", "content", "buttonText".
Convert those three CardComponents to use these props.
Create a new prop for the CardComponent, called "number".
Write logic in your Component, so that it doesn't render anything if the number is < 10.
Write logic so that if the number is > 50, we render:
 - an h1 tag called "Big number"
 - a p tag that shows our "number" variable

