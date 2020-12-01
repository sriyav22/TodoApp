import logo from './logo.svg';
import MainComponent from './components/main';
import './App.css';

function App() {
  //This calles the main component which in turn calls the main component
  return (
    <div className="App">
      <MainComponent />
    </div>
  );
}

export default App;
