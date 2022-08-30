# Interactive Card Details Form Solution

This is my solution to the [Interactive Card Details Form Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw).

## The Challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

## Built With

- HTML5 markup
- CSS (flexbox, CSS grid)
- ES6 Javascript
- Mobile-first workflow
- React (hooks, controlled components, conditional rendering)

## Screenshot

### Mobile

![mobile](https://user-images.githubusercontent.com/86936720/187306942-51f5476e-9db4-4fa1-b627-af609f4859b1.png)
![submit-form](https://user-images.githubusercontent.com/86936720/187338393-a9ab72d8-0549-4f37-ba4c-a747fb6988e0.png)

### Desktop

![desktop](https://user-images.githubusercontent.com/86936720/187307131-cf729493-1ad2-4a9a-9fa1-04f133003ebe.png)

## My Process

My solution to this challenge's UI was a mobile-first approach and adding subsequent styling (flexbox & CSS grid) for breakpoints greater than mobile screen sizes. This challenge was built with React's functional components and hooks (useState & useEffect) were used to have the credit card details dynamically change on the card UI based on user input on the form.

I used objects as the initial useState argument for the form's inputs and error messages.

```js
const [inputField, setInputField] = useState({
  name: "",
  cardNumber: "",
  month: "",
  year: "",
  cvc: "",
});

const [error, setError] = useState({
  name: { error: false, message: "" },
  cardNumber: { error: false, message: "" },
  month: { error: false, message: "" },
  year: { error: false, message: "" },
  cvc: { error: false, message: "" },
});
```

The inputField state variable is responsible for updating state any time the user enters information on the form. The state is passed as props to the form to control the input field components.

The error state variable is used to handle the prompts for each input if it was flagged as an error due to user input. In the case of an error, the error's boolean property would toggle and, depending on the error flagged, an appropriate error message would be updated. See below for error validation:

![error](https://user-images.githubusercontent.com/86936720/187336709-d69ea829-5372-42c2-833a-51bf107b9517.png)

One of the challenges was handling the logic of a successful submission. User errors would result in the UI indicating which fields were incorrect with a text prompt below the input field. A useEffect hook validated every time the error variable's state changed. The state error's boolean value was pushed into an array, called errorArray. Using the .every() method, if the result was "false" then no errors were present upon submission and the screen can render the prompt to end the form session.

```js
useEffect(() => {
  if (renderCount >= 1) {
    const errorArray = [];
    for (let key in error) {
      errorArray.push(error[key].error);
    }
    const isSubmissionClean = errorArray.every(
      (errorExists) => errorExists === false
    );
    isSubmissionClean && setFormSubmitted((state) => !state);
  } else {
    setRenderCount((prevCount) => prevCount + 1);
  }
}, [error]);
```

An issue with this implementation of useEffect hook was that useEffect runs the first time the app is rendered. Since the default value for the error state variable is set to false, the form would automatically be ready to submit when the form's button was clicked, bypassing any validation. Therefore, another state variable called "renderCount" was required to skip the first render. This allowed for validation to occur for every subsequent state change. Every time the form was submitted, it would run a handler function that would validate the length and format of each input field.

## What I Learned

I was able to execute various React concepts into this project that I had learned from online resources such as:

- [Zero To Mastery - Andrei Neagoie](https://zerotomastery.io/courses/learn-react/)
- [Scrimba - Bob Ziroll](https://scrimba.com/learn/learnreact)
- [Udemy - Angela Yu](https://www.udemy.com/course/the-complete-web-development-bootcamp/)

I was able to utilize state hooks with forms to create controlled components for the card form to update the UI dynamically. I got to dive deeper into the flexibility of state to not only be passed around as props, but to conditionally render components and certain CSS styles. Validating credit card information required the use of regex to parse through the user input and so I got to learn a little bit more about using regex as a form of validation and use it in this project.
