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
    // Don't uncomment this first , check existing console logs and read the explanation on page then uncomment and check
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
