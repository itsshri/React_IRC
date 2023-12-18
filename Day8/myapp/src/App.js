import React from 'react';
import './assets/css/App.css';
import WithLoading from './components/WithLoading';
import MyComponent from './components/MyComponent';

const WrappedComponentWithLoading=WithLoading(MyComponent)
function App() {

  return (
    <div className="App">
       <WrappedComponentWithLoading/>
    </div>
  );
}

export default App;