
import styles from "./App.css";
import Navbar from '../src/components/Navbar';

import Workouts from './pages/Workouts/Workouts';
import Register from './pages/Register/Register';
import Resume from './pages/Resumes/Resumes';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="container-fulid" style={{ backgroundColor: `#000` }}>
      <div className="container-xxl">
        <BrowserRouter>
          <div className="row">
            <div className="col-md-auto px-0">
              <Navbar />
            </div>
            <div className="col-md px-0">
              <Routes>
                <Route path="/" element={<Workouts />} />
                <Route path="/register" element={<Register />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App;



