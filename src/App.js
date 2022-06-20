import Navbar from "./navbar/Navbar";
import {Route,Routes} from "react-router-dom"
import Login from "./components/Login";
import Register from "./components/Register";
import ClientInformation from "./components/ClientInformation";
import Appointment from "./components/Appointment"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/client" element={<ClientInformation/>}/>
            <Route path="/appointment" element={<Appointment/>}/>

        </Routes>
    </div>
  );
}

export default App;
