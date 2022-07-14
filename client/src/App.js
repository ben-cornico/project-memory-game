import './App.css';
import './components/components.css'
import Header from './components/Header';
import CardContainer from './components/CardContainer';
import GameBoard from './components/GameBoard';
function App() {
  return (
    <div className="App">
      <Header />
      <GameBoard />
    </div>
  );
}

export default App;
