import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Employee />} />
          <Route path="/Attendence" element={<Attendence />} />
          <Route path="/Advance" element={<Advance />} />
          <Route path="/Leave" element={<Leave />} />
          <Route path="/Salary" element={<Salary />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
