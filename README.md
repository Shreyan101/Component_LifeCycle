### React Lifecycle Methods: componentWillUnmount Demonstration
## Overview
## This web application demonstrates the importance and proper usage of the componentWillUnmount lifecycle method in React. It uses a simple timer example to show how to clean up resources such as intervals to prevent memory leaks and unwanted background processes.

### Features
## Initialization: Demonstrates how to start an interval in componentDidMount.
## Cleanup: Shows how to properly clean up the interval in componentWillUnmount.
## User Interaction: Allows users to navigate between pages to observe the effects of proper and improper cleanup.
## How It Works
## Home Component
The Home component starts an interval when it mounts and increments a timer every second. The interval is intended to be cleared in the componentWillUnmount method, but initially, this cleanup is commented out to demonstrate the consequences.

## LifeCycle Component
The LifeCycle component explains what happens when the interval is not cleared and provides instructions to users on how to fix the issue by uncommenting the clearInterval line in the componentWillUnmount method.

## Code Example
## Home Component


import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor() {
    super();
    console.log('Constructor Called Parent (Home)');
    this.state = {
      timer: 0,
    };
  }

  componentDidMount() {
    console.log('ComponentDidMount Called');
    this.interval = setInterval(() => {
      console.log('setInterval called ---> costly operation');
      this.setState((prevState) => ({
        timer: prevState.timer + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount called');
    // Uncomment the line below to clear the interval and prevent memory leaks
    // clearInterval(this.interval);
  }

  render() {
    console.log(this.state.timer);
    return (
      <div className='container'>
        <h1 className='heading'>
          React Lifecycle Methods: componentWillUnmount
        </h1>
        <h1 className='intro'>Introduction</h1>
        <p className='intro-para'>
          Welcome to this demonstration of the componentWillUnmount lifecycle
          method in React. This method is called just before a component is
          removed from the DOM, making it the perfect place to clean up any
          resources that won't be needed anymore, such as intervals or network
          requests.
        </p>
        <h1 className='example'>
          Example: Using setInterval and componentWillUnmount
        </h1>
        <p className='example-para'>
          In this example, we'll create a simple React component that starts an
          interval when it mounts and cleans it up when it unmounts. This
          ensures that no memory leaks or unwanted background processes are left
          running.
        </p>
        <h1>Timer Value : {this.state.timer} </h1>
        <div className='btn'>
          <Link to='/lifecycle'>
            <h1>Click to go to Different page</h1>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;


## LifeCycle Component

import React from 'react';

const LifeCycle = () => {
  return (
    <div className='container'>
      <h1 className='intro'>Inspect and open Console</h1>
      <p className='intro-para'>
        You'll notice that setInterval continues to be called, performing costly
        operations. This happens because we haven't cleared the interval.
      </p>
      <h1 className='example'>
        This is because we didn't clear the Interval - It should be done in
        componentWillUnmount
      </h1>
      <p className='example'>
        To prevent this, we need to clear the interval in the
        componentWillUnmount method. Whenever we change the page,
        componentWillUnmount is called, ensuring that resources are properly
        cleaned up.
      </p>

      <p className='example'>Now, Try this -</p>
      <p className='intro-para'>
        Add <code>clearInterval(this.interval);</code> - in -
        <code>componentWillUnmount</code>, and refresh the page. Open the
        console and click on the lifecycle page. You will notice that the timer
        has now stopped.
      </p>
      <p className='intro-para'>
        This demonstrates the importance of optimization. If the interval is not
        cleared, it will keep running. Imagine having 100 such timers; it would
        significantly affect our app's performance.
      </p>
    </div>
  );
};

export default LifeCycle;


## Conclusion
This demonstration highlights how to effectively use componentWillUnmount to clean up intervals in React components. Proper cleanup is crucial for maintaining performance and avoiding memory leaks in your applications. Feel free to play around with the code and see how it works!

