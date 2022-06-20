import { NavLink } from "react-router-dom"
const Navbar = () =>{
    return (
        <>
        <div className="main">
        <div className="navbar">
             <div className="logo">
             <img src="hospitalapp-image/logo.png" alt="" />
             </div>
             <div className="menu">
                <ul>
                    <li><NavLink to="/appointment" className="link link2" activeClassName="active">Book Appointment</NavLink></li>
                    <li><NavLink to="/client" className="link" activeClassName="active">Client - Details</NavLink></li>
                    <li><NavLink to="/login" className="link" activeClassName="active">Login</NavLink></li>
                    <li><NavLink to="/register" className="link" activeClassName="active">Register</NavLink></li>
                </ul>
             </div>
        </div>
        <div className="section2">
                <ul>
                  <li className="disp"><NavLink to="/appointment" className="link" activeClassName="active"><button className="btn1">Book Appointment</button></NavLink></li>
                  <li><NavLink to="/login" className="link" activeClassName="active"> <button className="btn2">Login</button> </NavLink></li>
                  <li><NavLink to="/register" className="link" activeClassName="active"><button className="btn3">Register</button></NavLink></li>
                </ul>
        </div>
        </div>
        </>
        
    )
}

export default Navbar