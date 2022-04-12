import logo from './logo.svg';
import './App.css';
import { HiveDemo } from './components/HiveDemo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HiveDemo />
      </header>
    </div>
  );
}

export default App;
