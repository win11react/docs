This is a React component that implements a calculator app. The calculator has basic arithmetic operations as well as square, square root, and inverse functionalities. The app also keeps a history of calculations performed.

The component imports React and several functions from the react-redux library. It also imports some utility functions from a file named general.js.

The Calculator component defines several states using the useState hook:

equa: an array that holds the values of the operands and operators of the current equation
cval: a string that holds the current value displayed on the calculator screen
err: a string that holds an error message if there is an error
hist: an array that holds the history of calculations
The component defines a function getIdx that takes a DOM node and returns its index relative to its previous siblings. The action function is the main function that handles the calculator button clicks. The function first determines which button was clicked and its position on the calculator, and then performs the appropriate action based on the button clicked and the current state of the calculator. The function updates the states cval, err, equa, and hist based on the action performed.

The return statement of the Calculator component renders the calculator app UI. The UI consists of a toolbar and a window screen. The window screen contains the calculator display and buttons. The component uses conditional rendering to show the error message or the calculation history if there is an error or if the history button is clicked.
