//import logo from './logo.svg';
import './App.css';
import MapSection from "./Pages/Map/Map.jsx";
import NavBar from "./Pages/NavBar/nav";
import Login from "./Pages/LogIn/login";
import Home from "./Pages/Home/home"
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
//Add other pages here

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}


function App() {
  return (
    
    
    <div>
      <div>
      <Toolbar className = "Toolbar">
      <div className = "Square">
        <h1 className="title">Nav</h1>
      </div>
      <div className = "Square Buttons">
        <Fab className="Square" variant='extended'>
          My Profile
        </Fab>
        <Fab variant='extended'>
          About
        </Fab>
        <Fab variant='extended'>
          Map
        </Fab>
        <Fab variant='extended'>
          Login
        </Fab>
      </div>
    </Toolbar>
  </div>
  
      <div className = "App">
        <Home></Home>
        <Login></Login>
        <MapSection location={location} zoomLevel={18}></MapSection>
      </div>
    </div>
  );
}

export default App;
