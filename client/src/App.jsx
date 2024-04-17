import { useEffect, useState } from 'react'
import {Link,Route, Routes} from "react-router-dom"
import './App.css'
import GameDescription from "./components/GameDescription"
import CitySelection from "./components/CitySelection"
import ResultPage from './components/ResultPage'
import VehicleSelection from './components/VehicleSelection'

const link="http://localhost:8080";
// const link="https://yocket-assignment-gw7x.onrender.com"
function App() {
  

  const [cities, setCities] = useState([]);
  const [cops, setCops] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [selectedCop1, setSelectedCop1] = useState({
    cop:"Cop 1",
    selectedCity: "",
    selectedVehicle: "",
  });
  const [selectedCop2, setSelectedCop2] = useState({
    cop:"cop 2",
    selectedCity: "",
    selectedVehicle: "",
  });
  const [selectedCop3, setSelectedCop3] = useState({
    cop:"cop 3",
    selectedCity: "",
    selectedVehicle: "",
  });

  const [allSelectedCops, setAllSelectedCops] = useState([]);

  const [captureResult, setCaptureResult] = useState(null);
  const [availableVehicles, setAvailableVehicles] = useState([]);
  const [availableCities, setAvailableCities] = useState([]);

  const [startButton,setStartButton]=useState(true)

  useEffect(() => {
    fetchCities();
    fetchVehicles();
    fetchCops();
  }, []);

  useEffect(() => {
    setAvailableVehicles(vehicles);
  }, [vehicles]);

  useEffect(() => {
    setAvailableCities(cities.map(city => ({ ...city, selected: false })));
  }, [cities]);


  const fetchCities = async () => {
    const response = await fetch(`${link}/cities`);
    const data = await response.json();
    setCities(data);
  };

  const fetchCops = async () => {
    const response = await fetch(`${link}/cops`);
    const data = await response.json();
    setCops(data);
  };

  const fetchVehicles = async () => {
    const response = await fetch(`${link}/vehicles`);
    const data = await response.json();
    setVehicles(data);
  };

  const handleCapture = async () => {
    const selectedCops = [selectedCop1, selectedCop2, selectedCop3];
    const captureResults = [];

// console.log(selectedCops,"selectedCops")
   
      const response = await fetch(`${link}/capture`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedCops),
      });
      const data = await response.json();
      // captureResults.push(data);
    // }
// console.log(data)
    // const successfulCapture = captureResults.find((result) => result.success);
console.log(data, data.success)
    if (data.success==true) {
      setCaptureResult(data.result);
    } else {
      setCaptureResult({ success: false });
    }
  };
  console.log(captureResult,"CaptureResult")

  const handleVehicleSelection = (selectedVehicle) => {
    const updatedVehicles = availableVehicles.map((vehicle) => {
      if (vehicle.kind === selectedVehicle) {
        return { ...vehicle, count: vehicle.count - 1 };
      }
      return vehicle;
    });
    setAvailableVehicles(updatedVehicles);

    // Update selected vehicle for each cop
    // setSelectedCop1({ ...selectedCop1, selectedVehicle: selectedVehicle });
    // setSelectedCop2({ ...selectedCop2, selectedVehicle: selectedVehicle });
    // setSelectedCop3({ ...selectedCop3, selectedVehicle: selectedVehicle });


    if(selectedCop1.selectedVehicle===""){
      setSelectedCop1({ ...selectedCop1, selectedVehicle: selectedVehicle });
    }else if(selectedCop2.selectedVehicle===""){
      setSelectedCop2({ ...selectedCop2, selectedVehicle: selectedVehicle });
    }else if(selectedCop3.selectedVehicle===""){
      setSelectedCop3({ ...selectedCop3, selectedVehicle: selectedVehicle });
    }else{
      return
    }
  };
 

  const handleCitySelection = (selectedCity) => {
    
    
  

setAvailableCities(
  availableCities.map(city =>
    city.name === selectedCity ? { ...city, selected: true } : city
  ));
    
  
  
    // Update selected city for each cop
    // setSelectedCop1({ ...selectedCop1, selectedCity: selectedCity });
    // setSelectedCop2({ ...selectedCop2, selectedCity: selectedCity });
    // setSelectedCop3({ ...selectedCop3, selectedCity: selectedCity });
    if(selectedCop1.selectedCity===""){
      setSelectedCop1({ ...selectedCop1, selectedCity: selectedCity });
    }else if(selectedCop2.selectedCity===""){
      setSelectedCop2({ ...selectedCop2, selectedCity: selectedCity });
    }else if(selectedCop3.selectedCity===""){
      setSelectedCop3({ ...selectedCop3, selectedCity: selectedCity });
    }else{
      return
    }
   
    
  };

  return (
    <div className="App">
      <a href="/" className="header-link">
        <h1 className="header">CAPTURE THE FUGITIVE</h1>
      </a>
      {captureResult ? (
        <ResultPage result={captureResult} />
      ) :startButton? (
        <>
        <GameDescription handleStart={setStartButton}/>
        </>):(
        <>
          <h2 style={{ textAlign: "center", marginTop: "50px", color: "black", padding:"20px"}}>
          {cops[0]?.name}
          </h2>
          {/* <p>{cops[0]?.name}</p> */}
          <div className="image-container">
            <img src={cops[0]?.image} alt={cops[0]?.name} className="cop-image" />
          </div>
          <div className="select-container">
            <CitySelection
              cities={availableCities}
              handleCitySelection={handleCitySelection}
              // handleCitySelection={selectedCop1.selectedCity === "" ? handleCitySelection : undefined}
              
            />
          </div>
          <div className="select-container">
            <VehicleSelection
              vehicles={availableVehicles}
              handleVehicleSelection={handleVehicleSelection}
            />
          </div>

          <h2 style={{ textAlign: "center", marginTop: "70px", color: "Black" , padding:"20px"}}>
          {cops[1]?.name}
          </h2>
          {/* <p>{cops[1]?.name}</p> */}
          <div className="image-container">
            <img src={cops[1]?.image} alt={cops[1]?.name} className="cop-image" />
          </div>
          <div className="select-container">
            <CitySelection
              cities={availableCities}
              handleCitySelection={handleCitySelection}
              // handleCitySelection={selectedCop2.selectedCity === "" ? handleCitySelection : undefined}
              
            />
          </div>
          <div className="select-container">
            <VehicleSelection
              vehicles={availableVehicles}
              handleVehicleSelection={handleVehicleSelection}
            />
          </div>

          <h2 style={{ textAlign: "center", marginTop: "70px", color: "Black" , padding:"20px"}}>
          {cops[2]?.name}
          </h2>
          {/* <p>{cops[2]?.name}</p> */}
          <div className="image-container">
            <img src={cops[2]?.image} alt={cops[2]?.name} className="cop-image" />
          </div>
          <div className="select-container">
            <CitySelection
              cities={availableCities}
              handleCitySelection={handleCitySelection}
              // handleCitySelection={selectedCop3.selectedCity === "" ? handleCitySelection : undefined}
              
            />
          </div>
          <div className="select-container">
            <VehicleSelection
              vehicles={availableVehicles}
              handleVehicleSelection={handleVehicleSelection}
            />
          </div>
          <div className="button-container">
            <button onClick={handleCapture}>Capture</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App
