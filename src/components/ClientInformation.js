import {FaTrash} from "react-icons/fa"
const ClientInformation = () =>{
    return (
        <>
        <div className="client_main">
        <div className="clientInformation">
        <h1 className="text1">Client-Information</h1>
        <div className="section1">
        
         <div className="image">
         <img src="Photo_Abishek.jpeg" alt="" />
         </div>
         <div className="details">
         <p className="info">Abishek Shah</p>
         <p className="info">9848646176</p>
         <p className="info">abishekshah@gmail.com</p>
         <p className="info">Nepal</p>
         <p className="info">Ramdhuni Sunsari</p>
         </div>
         </div>
        </div>
        <h1 className="text2">Appointment-Status</h1>
        <div className="appointment_status">
        <div className="table">
            <tr className="row">
                <th><p className="name">ID</p></th>  
                <th><p className="name">Category</p></th>
                <th><p className="name">Doctor</p></th>
                <th><p className="name">Date</p></th>
                <th><p className="name">Time</p></th>
                <th><p className="name">Status</p></th>
                <th><p className="name">Delete</p></th>
            </tr>
            <tr className="row_data">
                <td><p className="row_name">1</p></td>
                <td><p className="row_name">Category</p></td>
                <td><p className="row_name">Doctor</p></td>
                <td><p className="row_name">Date</p></td>
                <td><p className="row_name">Time</p></td>
                <td><p className="row_name">Pending</p></td>
                <td><p className="row_name"><button><FaTrash/></button></p></td>
            </tr>
            <tr className="row_data">
                <td><p className="row_name">2</p></td>
                <td><p className="row_name">Category</p></td>
                <td><p className="row_name">Doctor</p></td>
                <td><p className="row_name">Date</p></td>
                <td><p className="row_name">Time</p></td>
                <td><p className="row_name">Pending</p></td>
                <td><p className="row_name"><button><FaTrash/></button></p></td>
            </tr>
        </div>
        </div>
        </div>
        </>
    )
}

export default ClientInformation