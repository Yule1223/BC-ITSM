import background_logo from '../../img/blockchain-background.svg';
import logo from '../../img/Slink-without-background.svg';
import '../styles/IndexScreen.style.css';
import Header from "../../components/views/Header";

function IndexScreen() {
  return (
    <div className="App bg-info">
      <Header />
      <header className="App-header">
        <img src={background_logo} className="App-logo-1" alt="logo" />
        <img src={logo} className="App-logo-2" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to Ouh.
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

export default IndexScreen;
