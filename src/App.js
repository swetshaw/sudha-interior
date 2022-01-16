import logo from './logo.svg';
import { Layout } from 'antd';
import './App.css';
import './antd.css';
import Navbar from './components/Navbar/Navbar';
import HeroContainer from './components/HeroContainer/HeroContainer';


function App() {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <div className='App'>
      <Navbar />
      <HeroContainer/>
    </div>
  );
}

export default App;
