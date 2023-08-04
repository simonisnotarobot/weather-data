import './App.css';
import React, {useState} from 'react';
import LocationForm from './LocationForm';
import WeatherDisplay from './WeatherDisplay';

function App() {
  const [text, setText] = useState('')
  const [location, setLocation] = useState(null)
  const handleSubmit = (event) => {
      event.preventDefault();
      setLocation(text)
  };
  function handleChange(e) {
      setText(e.target.value);
    }
  
  
  return (
      <>
          <LocationForm handleSubmit={handleSubmit} handleChange={handleChange} />
          {location && (<WeatherDisplay location={location} />)}
          
      
      </>
  )
}

export default App;
