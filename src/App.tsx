import "./App.css";
import Home from "./pages/patient/Home";
import About from "./pages/patient/About";
import DoctorChannel from "./pages/patient/DoctorChannel";
import Channel from "./pages/patient/Channel";
import Book from "./pages/patient/Book";
import Contact from "./pages/patient/Contact";
import Loging from "./pages/patient/Loging";
import Payment from "./pages/patient/Payment";
import DHome from "./pages/doctor/DHome";
import Form from "./pages/doctor/Form";
import DLoging from "./pages/doctor/DLoging";
import Register from "./pages/doctor/Register";
import Schedule from "./pages/doctor/Schedule";
import AHome from "./pages/admin/AHome";
import NotFoundPage from "./pages/patient/NotFoundPage";
import { Profile } from "./pages/patient/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientLogin from "./pages/Patient/PatientLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/DoctorChannel">
          <Route index element={<DoctorChannel />} />
          <Route path="Channel" element={<Channel />} />
        </Route>
        <Route path="/Book" element={<Book />} />
        <Route path="/ContactUs" element={<Contact />} />
        <Route path="/Loging" element={<Loging />} />
        <Route path="/Payment" element={<Payment />} />

        <Route path="/patient-login" element={<PatientLogin />} />

        <Route path="/DHome" element={<DHome />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/DLoging" element={<DLoging />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Shedule" element={<Schedule />} />
        <Route path="/AHome" element={<AHome />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
