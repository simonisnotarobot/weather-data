const LocationForm = ({handleSubmit, handleChange, location}) => {
   
  
  return (
      <>
      <form onSubmit={handleSubmit}>
        <label>
          Where in the world are you? <input name="location" placeholder="Enter a location" onChange={handleChange} />
        </label> 
        <button type="submit">Get Weather</button> 
      </form>
        </>   
    );
  }

  export default LocationForm;