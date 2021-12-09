import '../styles/Header.style.css';
import logo from '../../img/logo.svg';
import {injected} from "../wallets/Connectors";
import {useWeb3React} from "@web3-react/core";

function Header() {
    const {active, account, library, connector, activate, deactivate} = useWeb3React()

    async function connect() {
        try {
            await activate(injected)
        } catch (ex) {
            console.log(ex)
        }
    }

    async function disconnect() {
        try {
            deactivate()
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
            <button onClick={connect}>Connect to MetaMask</button>
            {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}
            <button onClick={disconnect}>Disconnect</button>
        </nav>
    );
}

export default Header;
