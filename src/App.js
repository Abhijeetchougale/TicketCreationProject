import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import User from './Pages/User';
import CreateProject from './Pages/CreateProject';
import Issue from './Pages/Issue';
import ProjectUser from './Pages/ProjectUser';
import TicketType from './Pages/TicketType';
import TicketStatus from './Pages/TicketStatus';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<User/>} />
          <Route path="/CreateProject" element={<CreateProject/>} />
          <Route path="/Issue" element={<Issue/>} />
          <Route path="/ProjectUser" element={<ProjectUser/>} />
          <Route path="/TicketType" element={<TicketType/>} />
          <Route path="/TicketStatus" element={<TicketStatus/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
