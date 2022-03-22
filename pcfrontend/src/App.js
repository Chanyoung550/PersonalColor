import { Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import InputPage from './pages/InputPage';
import StartPage from './pages/StartPage';

function App() {
  return (
    <div className="container">
      <Header />
      <Route path="/" exact={true} component={StartPage}/>
      <Route path="/input" exact={true} component={InputPage}/>
      <Footer />
    </div>
  );
}

export default App;