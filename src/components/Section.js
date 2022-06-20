import { NavLink } from "react-router-dom"
const Section = () =>{
    return (
        <>
        <div className="main">
        <div className="section1">
        <NavLink to="/appointment" className="link" activeClassName="active"> <button className="btn1">Book Your Appointment</button> </NavLink>
        </div>
        </div>
        </>
    )
}
export default Section