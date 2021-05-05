//import logo from './logo.svg';
import './App.css';
import MapSection from "./Pages/Map/Map.jsx";
import PersonalPage from "./Pages/PersonalPage/PersonalPage.jsx";
import About from "./Pages/About/About.jsx"
import Navigation from "./Pages/PageComponents/Navigation.jsx"
import Footer from "./Pages/PageComponents/Footer.jsx"
import Home from "./Pages/Home.jsx"
import LogIn from "./Pages/LogIn/login.jsx"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//Add other pages here

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}

function App() {
  return (
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/Login" exact component={() => <LogIn />} />
            <Route path="/Map" exact component={() => <MapSection location={location} zoomLevel={18}></MapSection>} />
            <Route path="/Profile" exact component={() => <PersonalPage />} />
            <Route path="/About" exact component={() => <About />} />
          </Switch>
        </Router>
      </div>
  );
}

export default App;
