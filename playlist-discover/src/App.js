//import logo from './logo.svg';
import './App.css';
import MapSection from "./Pages/Map/Map.jsx";
//Add other pages here

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}


function App() {
  return (
    <div className = "App">
      <MapSection location={location} zoomLevel={18}></MapSection>
    </div>
  );
}

export default App;
