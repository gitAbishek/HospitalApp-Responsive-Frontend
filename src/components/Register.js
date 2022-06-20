const Register = () =>{
    return (
        <div className="register">
           <h1 className="text">Register here</h1>
           <input className="register_input" type="text" placeholder="Enter Your FirstName"/>
           <input className="register_input" type="text" placeholder="Enter Your LastName"/>
           <input className="register_input" type="text" placeholder="Enter Your Email"/>
           <input className="register_input" type="text" placeholder="Enter Your Number"/>
           <input className="register_input" type="text" placeholder="Enter Your Password"/>
           <input className="register_input" type="text" placeholder="Confirm your passord"/>
           <button className="btn">Register</button>
        </div>
    )
}
export default Register