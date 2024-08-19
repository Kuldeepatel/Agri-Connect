import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import SignIn from './Components/SignIn.jsx';
import DiseaseDetection from './Components/DiseaseDetection.jsx'
import GovernmentScheme from './Components/GovermentSchem.jsx';
import SignUp from './Components/SignUp.jsx';
import HomePage from './Components/HomePage.jsx';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/goverment-schem" element={<GovernmentScheme/>} />
    <Route path="/disease-detection" element={<DiseaseDetection/>} />
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/" element={<SignIn/>}/>
    <Route path="/home" element={<HomePage/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
