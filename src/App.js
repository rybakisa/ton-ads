import logo from './logo.svg';
import './App.css';
import WalletConnection from './components/WalletConnection.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <WalletConnection />
      </header>
    </div>
  );
}

export default App;
