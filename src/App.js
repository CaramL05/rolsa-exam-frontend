import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import CarbonFootprint from './Pages/CarbonFootprint/CarbonFootprint';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Services from './Pages/Services/Services';
import Shop from './Pages/Shop/Shop';
import AboutService from './Components/AboutService/AboutService';
import ServiceQuestionsPage from './Pages/ServiceQuestionPage/ServiceQuestionPage';
import Calendar from './Pages/CalendarPage/CalendarPage';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carbon-footprint" element={<CarbonFootprint />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/about-service" element={<AboutService />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/services/about-service/service-questionnaire" element={<ServiceQuestionsPage />} />
        <Route path="/services/about-service/service-questionnaire/calendar" element={<Calendar />} />


        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
