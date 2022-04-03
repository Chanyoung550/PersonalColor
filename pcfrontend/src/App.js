import { Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ChkPhotoPage from './pages/ChkPhotoPage';
import InputPage from './pages/InputPage';
import MobileInputPage from './pages/MobileInputPage';
import PhotoPage from './pages/PhotoPage';
import ResultPage from './pages/ResultPage';
import SelectPhotoPage from './pages/SelectPhotoPage';
import StartPage from './pages/StartPage';

function App() {
  return (
    <div className="container">
      <Header />
      <Route path="/" exact={true} component={StartPage}/>
      <Route path="/input" exact={true} component={InputPage}/>
      <Route path="/mobileInput" exact={true} component={MobileInputPage}/>
      <Route path="/selectPhoto" exact={true} component={SelectPhotoPage}/>
      <Route path="/photo" exact={true} component={PhotoPage}/>
      <Route path="/chkPhoto" exact={true} component={ChkPhotoPage}/>
      <Route path="/result" exact={true} component={ResultPage}/>
      <Footer />
    </div>
  );
}

export default App;