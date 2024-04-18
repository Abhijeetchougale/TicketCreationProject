import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './Pages/User'
import Issues from './Pages/Issue';
import ProjectUser from './Pages/ProjectUser';
import TicketStatus from './Pages/TicketStatus';
import TicketType from './Pages/TicketType';
import CreateProject from './Pages/CreateProject';
import { Navbar } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <Navbar/>
       <BrowserRouter>
            <Routes>
              <Route path="user" element={<User></User>}></Route>
              <Route path="/project" element={<CreateProject/>}></Route>
              <Route path="/issues" element={<Issues></Issues>}></Route>
              <Route path="/projectUser" element={<ProjectUser></ProjectUser>}></Route>            
              <Route path="/ticketType" element={<TicketType></TicketType>}></Route>
              <Route path="/ticketStatus" element={<TicketStatus></TicketStatus>}></Route>               
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;