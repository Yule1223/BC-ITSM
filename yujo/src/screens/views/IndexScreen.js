import 'bootstrap/dist/css/bootstrap.min.css';
import background_logo from '../../img/blockchain-background.svg';
import logo from '../../img/Slink-without-background.svg';
import '../styles/IndexScreen.style.css';
import Header from "../../components/views/Header";
import Typewriter from "typewriter-effect";
import {Link} from "react-router-dom";

function IndexScreen() {
  return (
    <div className="App bg-info">
      <Header />
      <header className="App-header">
          <img src={background_logo} className="App-logo-1" alt="logo" />
          <img src={logo} className="App-logo-2" alt="logo" />
          <div className="typed">
              <Typewriter
                  options={{
                    autoStart:true,
                    loop: true
                  }}
                  onInit={(typewriter) => {
                      typewriter
                          .typeString("Abrir Tu SLA AHORA")
                          .pauseFor(300)
                          .deleteChars(5)
                          .pauseFor(1000)
                          .typeString("En <strong>BlockChain</strong>")
                          .start();
                  }}/></div>
          <Link to="/form">
              <button type="button" className="btn-index btn btn-light"><strong>¡LO QUIERO!</strong></button>
          </Link>
      </header>
    </div>
  );
}


export default IndexScreen;
