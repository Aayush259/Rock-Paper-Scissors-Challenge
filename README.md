# Rock Paper Scissors Game

This is a simple Rock Paper Scissors game built using React. This project was my first experience with React and served as a great learning opportunity.

## Concepts Learned

Through this project, I learned and implemented the following React concepts:

1. **React Components**: The game is divided into several components such as `App`, `Nav`, `State`, `Step2`, `Message`, and `Rules`.

2. **React State**: The `useState` hook is used to manage the state of the game, including the score, opacity, and rules.

3. **Event Handling**: Event handlers are used to manage user interactions like clicking on the rules button and selecting an option in the game.

4. **Conditional Rendering**: Based on the state of the game, different components or elements are rendered.

5. **Props**: Props are used to pass data and event handlers down to child components.

## Project Structure

- `App.js`: This is the main component of the application. It maintains the state for score, opacity, and rules. It also contains functions to update the score, close the rules pop-up window, and handle the rules button click.

- `Nav.js`: This component displays the header of the application, including the game logo and the current score.

- `State.js`: This component manages the game state. It contains functions to get a random choice for the computer, check the winner, and update the game step based on the user's choice.

- `Step2.js`: This component handles the second step of the game, where the user's choice and the computer's choice are compared to determine the winner.

- `Message.js`: This component displays the game result message and the "Play Again" button.

- `Rules.js`: This component displays the game rules when the "Rules" button is clicked.

- `index.js`: This is the entry point of the application. It renders the App component into the root element of the HTML.

- `style.css`: This file contains all the styles for the application.

## How to Run

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Start the application using `npm start`.

## About
This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects.
