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
        This is because we didn't cleared the Interval - It should be done in
        componentWillUnmount
      </h1>
      <p className='example'>
        To prevent this, we need to clear the interval in the
        componentWillUnmount method. Whenever we change the page,
        componentWillUnmount is called, ensuring that resources are properly
        cleaned up.
      </p>

      <p className='example'>Now , Try this -</p>
      <p className='intro-para'>
        Add <code> clearInterval(this.interval); </code> - in -
        <code> componentWillUnmount</code>, and refresh the page. Open the
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
