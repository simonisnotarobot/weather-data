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
          
          <div className='row d-flex justify-content-center'>
            <div className='col-md-6'>
              <LocationForm handleSubmit={handleSubmit} handleChange={handleChange} />
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
            <div className='col-md-6'>
              {location && (<WeatherDisplay location={location} />)}
            </div>
          </div>

          
          
      
      </>
  )
}

export default App;
