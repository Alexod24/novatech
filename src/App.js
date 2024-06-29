import logo from './logo.svg';
import './App.css';

import Modal from './components/index'
import About from './components/about'
import Cards from './components/cards'
import Team from './components/team'

 
function App() {
  return (
    <div className="App">
      <Modal/>
      <About/>
      <Cards/>
      <Team/>
   

      {/* <Header/> */}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
