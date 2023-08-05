const LocationForm = ({handleSubmit, handleChange, location}) => {
   return (
      <>
        <div className="row d-flex justify-content-center">
          <div className='col-md-6 w-50'>
            <form className='text-center border border-light p-5' onSubmit={handleSubmit}>
              <p className='h2 mb-4'>Where are you?</p>
              <input className='form-control mb-4' name="location" placeholder="Enter a location" onChange={handleChange} />
              <button className='btn btn-info btn-block my-4' type="submit">Get Weather</button> 
            </form>
          </div>
        </div>
      </>   
    );
  }

  export default LocationForm;