import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroContainer from './components/HeroContainer/HeroContainer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <HeroContainer />
    </div>
  );
}

export default App;
