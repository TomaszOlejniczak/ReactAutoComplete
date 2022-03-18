## React Autocomplete Module

Kudos! Welcome to the next module! 

### Requirements (What you should know so far and setup):
- HTML and CSS,
- Upper-Intermediate JavaScript (ES5 and ES6 both), includes especially:
  - scope, loops, iterators,
  - data structures with methods,
  - this context,
  - objects and classes,
  - modules
- Developer environment basics,
- NPM,
- Node.js version *>14*

This repository is ready to use React project. At the end of this module your task will be to develop fully operational mini-app based on this.
You can clone this and by making a few commands create usable local starter:
```console
web@dev:~$ npm install
web@dev:~$ npm run build
web@dev:~$ npm run start
```
create brand new branch, work and then push remotely.

Or just make your own, set up your own repository and then React app:
```console
web@dev:~$ npx create-react-app app-name
```

## Let's get started

This one is the very first meeting with JavaScript framework. No prior React knowledge is expected.<br />
We will start at the very beginning and move slowly.<br />
**Our main goal with that part is to develop contact *searching bar with autocomplete sugesstion list* which is pretty real use case.**
Ready mini-app should look like [this](https://tomaszolejniczak.github.io/ReactAutoComplete).

#### Why do we need framework?
Commercial Web Development is about creating full-scale apps with many different actions and dependencies.<br />
You need to control elements states and flow and taking care of modularity at the same time.<br />
Achive all of that with pure JavaScript is possible but you have to make arduous effort, waste time and final creation will always give way to framework using solutions in many aspects, like working speed, scalability and flexibility.<br />
The purpose of framework is to allow designers and developers to focus on building an unique feature for their web based projects. Rather than re-inventing by coding.

#### Is React a good choice?
React was developed by engineers at Facebook.
- React is fast. Apps made in React can handle complex updates and still feel quick and responsive,
- React is modular. Instead of writing large, dense files of code, you can write many smaller, reusable files,
- React is scalable. Large programs that display a lot of changing data are where React performs best,
- React is flexible. You can use React for interesting projects that have nothing to do with making a web app.
- React is the most popular choice made by developers.

### 1. JSX
JSX is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML.
What does “syntax extension” mean?
In this case, it means that JSX is not valid JavaScript. Web browsers can’t read it!
If a JavaScript file contains JSX code, then that file will have to be compiled. That means that before the file reaches a web browser, a JSX compiler will translate any JSX into regular JavaScript.
Here’s an example of a JSX element:
```js
<h1>Hello world</h1>
const navBar = <nav>I am a nav bar</nav>;
const p1 = <p id="large">foo</p> // With attributes

const theExample = (
   <a href="https://www.example.com">
     <h1>
       Click me!
     </h1>
   </a>
 ); // Nested JSX has to be surrounded by parentheses
 // JSX expression must have exactly one outermost element
```
JSX elements are treated as JavaScript expressions. They can go anywhere that JavaScript expressions can go.
That means that a JSX element can be saved in a variable, passed to a function, stored in an object or array.
You’ve learned how to write JSX elements. Now it’s time to learn how to render them.
To render a JSX expression means to make it appear onscreen.
```js
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));
/* Render <h1> JSX in index.html element with 'app' Id
*/ In place of the first argument you can put a variable as well
```
One special thing about ReactDOM.render() is that it only updates DOM elements that have changed.
That means that if you render the exact same thing twice in a row, the second render will do nothing.

### 1.1 Advanced JSX
In HTML, it’s common to use class as an attribute name:
```js
<h1 class="big">Hey</h1> // HTML
<h1 className="big">Hey</h1> // React JSX
```
In JSX, you can’t use the word class! You have to use className instead.
```js
<h1>2 + 3</h1> // 2 + 3 will appear after render
<h1>{2 + 3}</h1> // Values in curly braces renders real operation; 5 will appear
<h1>{name}</h1> // You can put there variables as well!
<img src={name} /> // Or variables of attributes
```
JSX elements can have event listeners, just like HTML elements can.
You create an event listener by giving a JSX element a special attribute.
```js
function myFunc() {
  alert('Some alert!');
}
 
<img onClick={myFunc} />

// You can work with condition instrucitons and ternary operators in methods
let message;

if (user.age >= adult) {
  message = (
    <h1>
      You can drink alcohol.
    </h1>
  );
} else {}

message = (
  <h1>
    { user.age >= adult ? 'You can drink alcohol.' : 'You still have to grow up!' }
  </h1>
);
```
The array method .map() comes up often in React. It’s good to get in the habit of using it alongside JSX.
```js
const names = ['Adam', 'Clair', 'Robert'];
 
const listNames = names.map(name => <li>{name}</li>);
 
<ul>{listNames}</ul> // Render gives you all elements listed
```
Comments within JSX
```js
<ul>
  {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
  {/*This is a comment*/}
</ul>
```

### 1.2 Quiz
1. What’s wrong with this code?
```js
let skateboardDog = (
  <img src="alfie.jpg" />
  <h1>Hiya kids!  I'm a dog on a skateboard.</h1>
);
```
- A. There is nothing wrong.
- B. JSX expressions need an outermost element.
- C. JSX expressions need to be compiled.

<details><summary>Show the right answer</summary>
<p>
B.
</p>
</details>

2. What is the correct way to attach the function yo to a click event?
```js
let yo = () => {
  alert('Yo');
};
```
- A. ```<button {onClick}={yo}></button>```
- B. ```<button onClick={yo}></button>```
- C. ```<button {onClick=yo}></button>```

<details><summary>Show the right answer</summary>
<p>
B.
</p>
</details>


3. Can a web browser read JSX directly?

- A. No. JSX must be compiled before it can be read by a web browser.
- B. Yes.
- C. No, a web browser must be compiled before it can read JSX.

<details><summary>Show the right answer</summary>
<p>
A.
</p>
</details>

4. Which will render 100 to the screen?

- A. ```<h1>{10 * 10}</h1>```
- B. ```<h1>10 * 10</h1>```
- C. ```{<h1>10 * 10</h1>}```

<details><summary>Show the right answer</summary>
<p>
A.
</p>
</details>

### 2. Components
A React application can contain dozens, or even hundreds, of components.
Each component might be small and relatively unremarkable on its own. When combined, however, they can form enormous, fantastically complex ecosystems of information. In other words, React apps are made out of components, but what makes React special isn’t components themselves. What makes React special is the ways in which components interact.

```js
// Here is a .render() method that returns an HTML-like JSX element

import React from 'react';
import ReactDOM from 'react-dom';

class Example extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// You can use it later on with ReactDOM.render()

ReactDOM.render(<Example />, document.getElementById('app'))
```
Good practice is to call components started with capital letter and to keep each of them in seperate files.
You have to use import, when you want to use components from different files.
```js
import React from 'react';
import ReactDOM from 'react-dom';
import {NavBar} from './NavBar.js'

class MyPage extends React.Component { // imported NavBar component have to contain 'export' key word before class
  render() {
    return (
      <div>
        <NavBar />
        <h1>All About Me!</h1>
        <p>I like movies</p>
        <img src="url" />
      </div>
    );
  }
}
```
### 2.1 Components props
You will learn now another way that components can interact: a component can pass information to another component.
Information that gets passed from one component to another is known as “props”.
A component’s props is an object. It holds information about that component.
```js
<MyComponent foo="bar" /> // You can pass some data into component and use it later on
<MyComponent name="Thomas" town="Poznan" age={29} company="AppUnite" />
```
```
// Code snippet below renders 'Hi there, Thomas!'
class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='Thomas' />, 
  document.getElementById('app')
);
```
You can also use it as event handler.
```js
class MyClass extends React.Component {
  handleHover() {
    alert('I am an event handler.');
  }
 
  render() {
    return <Child onHover={this.handleHover} />;
  }
}
```
### 2.2 Components state
React components will often need dynamic information in order to render. For example, imagine a component that displays the score of a basketball game. The score of the game might change over time, meaning that the score is dynamic. Our component will have to know the score, a piece of dynamic information, in order to render in a useful way.
There are two ways for a component to get dynamic information: props and state. Besides props and state, every value used in a component should always stay exactly the same.
```js
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' };
  }
 
  render() {
    return <div></div>;
  }
}
 
<Example />

// To access that state we just have to enter object
render() { // Method for class Example
    return (
      <h1>
        I'm feeling {this.state.mood}!
      </h1>
    );
  }
```
It is very bad practice to overwrite state. It's better to use setState() method instead.
```js
{
  mood: 'great',
  hungry: false
}

this.setState({ hungry: true });
```

### 3. Components Interacting
React components can receive dynamic information from props, or set their own dynamic data with state. Props are passed down by parent components, whereas state is created and maintained by the component itself.
In the example below, you can see this.state set up in the constructor, used in render(), and updated with this.setState(). this.props refers to the props, which you can see in the render() method.
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPassword: false };
  }
 
  render() {
    let text;
    if (this.state.showPassword) {
      text = `The password is ${this.props.password}`;
    } else {
      text = 'The password is a secret';
    }
 
    return (
      <div>
        <p>{text}</p>
        <button
          onClick={(event) => {
            event.preventDefault();
            this.setState((oldState) => ({
              showPassword: !oldState.showPassword,
            }));
          }}
        >
          Toggle password
        </button>
      </div>
    );
  }
}
```
### 3.1 Stateful and Stateless Components
In React, a stateful component is a component that holds some state. 
Stateless components, by contrast, have no state. Note that both types of components can use props.
In the example, there are two React components. The Store component is stateful and the Week component is stateless.
```js
class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sell: 'anything' };
  }
  render() {
    return <h1>I'm selling {this.state.sell}.</h1>;
  }
}
 
class Week extends React.Component {
  render() {
    return <h1>Today is {this.props.day}!</h1>;
  }
}
```
One of the most common programming patterns in React is to use stateful parent components to maintain their own state and pass it down to one or more stateless child components as props. The example code shows a basic example.
```js
// This is a stateless child component.
class GiveName extends React.Component {
  render() {
    return <h2>I am {this.props.name}!</h2>;
  }
}
 
// This is a stateful Parent element.
class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Thomas' };
  }
 
  // The child component will render information passed down from the parent component.
  render() {
    return <Name name={this.state.name} />;
  }
}
```
A common React programming pattern is to use a parent stateful component to manage state and define state-updating methods. 
Then, it will render stateless child components.
One or more of those child components will be responsible for updating the parent state (via methods passed as props). 
One or more of those child components will be responsible for displaying that state.
In the example below, StatefulParent renders InputComponent to change its state and uses DisplayComponent to display it.
```js
class StatefulParent extends React.Component {
  constructor(props) {
    super(props);
    // Set up initial state here
    // Bind handler functions here
  }
 
  handlerMethod(event) {
    // Update state here
  }
 
  render() {
    return (
      <div>
        <InputComponent onChange={handler} />
        <DisplayComponent valueToDisplay={this.state.valueToDisplay} />
      </div>
    );
  }
}
```

### 3.2 Quiz

1. How do you render a component instance?

- A. ```ReactDOM.render(<MyComponent />);```
- B. You can't render a component instance.
- C. ```ReactDOM.render(<MyComponent />, document.getElementById('app');```

<details><summary>Show the right answer</summary>
<p>
C.
</p>
</details>

2. Which statement best describes a component class?

- A. An artisan who painstakingly crafts React components, each one being unique.
- B. A React component that devides into other React components.
- C. A factory that mass-produces React components according to a blueprint.

<details><summary>Show the right answer</summary>
<p>
C.
</p>
</details>

3. Which line of code is used to create a component class?

- A. React.createElement();
- B. class MyComponent extends React.Component {}
- C. Class MyComponent extends React.Component {}

<details><summary>Show the right answer</summary>
<p>
B.
</p>
</details>

4. Which of the following answers is the correct way to get <img /> to render with fox‘s properties?

```js
import React from 'react';
import ReactDOM from 'react-dom';
 
const fox = {
  src: 'http://some.url',
  alt: 'fox'
};
 
class Fox extends React.Component {
  render() {
    return(
      <div>
        <h1>Friendly Fox</h1>
        <img />
      </div>
    );
  }
}
```

- A. ```<img `src`={fox.src} `alt`={fox.alt} />```
- B. ```<img src={this.fox.src} alt={this.fox.alt} />```
- C. ```<img src=fox.src alt=fox.alt />```

<details><summary>Show the right answer</summary>
<p>
B.
</p>
</details>

### 4. CSS Styles in React
In JSX, you can’t use the word class! You have to use className instead. 
This is because JSX gets translated into JavaScript, and class is a reserved word in JavaScript.
When JSX is rendered, JSX className attributes are automatically rendered as class attributes.
```js
// When rendered, this JSX expression...
const heading = <h1 className="large-heading">Hello world!</h1>;
 
// ...will be rendered as this HTML
<h1 class="large-heading">Hello world!</h1>
```
The syntax of JSX attributes closely resembles that of HTML attributes. 
In the block of code, inside of the opening tag of the h1 JSX element, we see an id attribute with the value "example".
```js
const example = <h1 id="example">JSX Attributes</h1>;
```
Attaching CSS files to use with components is as simple as that. You can create your own .css file inside /src folder and then import it into component with the class.
```js
import React from "react";
import './Autocomplete.css'; // Importing a css properties

export default class Autocomplete extends React.Component { // Creating a class to represent component
  constructor(props) {
    super(props);
 }
}
```

## Project
You should be able now to use all the knowledge above to create your very first real case mini-project.
Your job is to build React app **Search bar for contact choice** with autocomplete suggestion list.
There are a few assumptions:
- All methods should be inside one component,
- Changing value input should be dynamically connect with list craetion above,
- Choosing one of the option should change input value on click event,
- Your component should get the data from ready to use file *src/names.js* inside starter project,
- You should write styles on your own,
- There are ready to use autocomplete components from different libraries - you are not allowed to use them!

**You can find final solution on autocomplete_solution branch inside repository and as a staging [here](https://tomaszolejniczak.github.io/ReactAutoComplete)**
#### If you feel insecure just follow step-by-step scenario that I've prepared for you!
1. Create new file instide project called Autocomplete.js i.e. 
2. Take care of the necessary imports inside and create init class
<details><summary>Hint</summary>
<p>

```js
export default class Autocomplete extends React.Component { // Creating a class to represent our component
  constructor(props) {
    super(props);
    this.state = { // Defining initial state for autocomplete suggestions list and text value in input
      suggestions: [],
      text: '',
    };
  } // Create an class and methods below for the whole service
```

</p>
</details>

3. Take care of render method which is responsible for pushing JSX outside component

<details><summary>Hint</summary>
<p>

```js
  render() { // Rendering HTML elements directly in JavaScript using JSX
    const { text } = this.state;
    return (
      <div className="autocomplete">
        <input value={text} onChange={this.textOnChange} type="text" /> {/*Text box with updating input value*/}
        {this.renderAutocomplete()}
      </div>
    );
  }
```

</p>
</details>

4. You have to implement at least three more methods:

- First for searching pattern in contact list based on input value,
<details><summary>Hint</summary>
<p>
You can use JS Regular expression

```js
    if (value.length > 0) { // For case that input is not empty
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = items.sort().filter(i => regex.test(i)); // Searching for list item based on a pattern
    }
```

</p>
</details>

- Second for rendering filtered list based on input value,

<details><summary>Hint</summary>
<p>

```js
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    } // If there is no suggestions return nothing
    return (
      <ul>
        {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
        {/*If there are some suggestions return filtered list and populate text box with element which you click on*/}
      </ul>
    )
```

</p>
</details>

- Last for updating states when click on selected option from suggestion list

<details><summary>Hint</summary>
<p>

```js
  suggestionSelected (value) { // Setting a new state for gained data
    this.setState(() => ({
      text: value,
      suggestions: [],
    }))
  }
```

</p>
</details>

5. You have to render your whole component in App.js, inside App() function

<details><summary>Hint</summary>
<p>

```js
function App() {
  return (
    <div className="App">
      <Autocomplete items={names}/> {/*Instance of our Autocomplete component with passing data as props*/}
    </div>
  );
}
```

</p>
</details>
