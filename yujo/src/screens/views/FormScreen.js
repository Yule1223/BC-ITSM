import logo from '../../logo.svg';
import '../styles/FormScreen.style.css';
import Header from "../../components/views/Header";

function FormScreen() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Yule
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

export default FormScreen;
