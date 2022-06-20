const Appointment = () =>{
    return (
        <div className="appointment">
            <h1 className="text1">Book Your Appointment</h1>
            <div className="details">
            <div className="column1">
              <input placeholder="Enter Your Name" type="text" className="field" />
              <input placeholder="Enter Your Number" type="text" className="field" />
              <input placeholder="Enter Your Gmail" type="text" className="field" />
              <input placeholder="Country" type="text" className="field" />
            </div>
            <div className="column1">
              <input placeholder="Address" type="text" className="field" />
              <input placeholder="Date" type="text" className="field" />
              <input placeholder="choose Category" type="text" className="field" />
              <input placeholder="Available doctor" type="text" className="field" />
              <button className="Submit">Submit</button>
            </div>
            </div>
            
        </div>
    )
}

export default Appointment