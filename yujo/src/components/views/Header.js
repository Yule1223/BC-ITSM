import '../styles/Header.style.css';
import logo from '../../img/logo.svg';
import {injected} from "../wallets/Connectors";
import {useWeb3React} from "@web3-react/core";
import {Button} from "react-bootstrap";

function Header() {
    const {active, activate, deactivate } = useWeb3React()

    async function connect() {
        try {
            await activate(injected)
        } catch (ex) {
            console.log(ex)
        }
    }

    async function disconnect() {
        try {
            await deactivate()
        } catch (ex) {
            console.log(ex)
        }
    }

    return (
        <nav className="navbar navbar-light bg-info fixed-top p-1">
            <a className="navbar-brand text-dark" href="/">
                <img src={logo} width="30" height="30"
                     className="d-inline-block align-top" alt=""/>Slink
            </a>
            {active ? <Button onClick={disconnect} variant="danger">Disconnect from MetaMask</Button> : <Button onClick={connect} variant="success">Connect to MetaMask</Button>}
        </nav>
    );
}

export default Header;
