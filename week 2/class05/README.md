# Class 5: Putting it all together

Deploy and Extend Your Portfolio

Overview
Get ready to take a look at a full-featured code base! You have just started a new job and the employer wants you to demonstrate your skills by building a portfolio using React. This should highlight your knowledge of the React library and your ability to explore a new codebase. The starter template for today contains a complete React + Bootstrap site with example pages, icons, styles, and a themed layouts. Your job is to customize this code by following the specifications in the Trello board.

## Learning Objectives

As a result of completing lecture 5 of Code 301, students will:

- Describe and Define: 
  - Conditional Rendering
  - Ternary Statements
  - Browser Router
- Be able to build a React app that passes props from parent component to child component
- Hold state in the application
- Use forms in React
- Conditionally render data

## Notes

1. What is conditional rendering?

1. What is Browser Router?

1. A ternary statement:
  ```javaScript
  // regular if/else conditional
  if(conditionIsTrue){
    return 'it is true'
  } else {
    return 'it is false'
  }

  // ternary statement
  return conditionIsTrue ? 'it is true' : 'it is false';
  ```

1. Conditionally render a component:
  ```javaScript
  class Parent extends React.Component {
    constructor(props){
      super(props);
      this.state={
        displayChild: false
      }
    }

    render() {
      return(
        // use a ternary to conditionally render the Child component
        {this.state.displayChild ? 
          <Child>
        : ''
        }
      )
    }
  }
  ```

- A better way to write it would be:
  ```javaScript
  class Parent extends React.Component {
    constructor(props){
      super(props);
      this.state={
        displayChild: false
      }
    }

    render() {
      return(
        {this.state.displayChild &&
          <Child>
        }
      )
    }
  }
  ```
  