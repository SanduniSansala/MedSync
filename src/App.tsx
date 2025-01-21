import "./App.css";

import Home from "./pages/patient/Home";
import About from "./pages/patient/About";
import DoctorChannel from "./pages/patient/DoctorChannel";
import Channel from "./pages/patient/Channel";
import Book from "./pages/patient/Book";
import Contact from "./pages/patient/Contact";
import PatientRegistration from "./pages/patient/PatientRegistation";
import Payment from "./pages/patient/Payment";
import Doctor from "./pages/doctor/Doctor";
import Form from "./pages/admin/AddDoctor";
import DoctorLogin from "./pages/doctor/DoctorLogin";
import Schedule from "./pages/doctor/Schedule";
import Admin from "./pages/admin/Admin";
import NotFoundPage from "./pages/patient/NotFoundPage";
import Profile from "./pages/patient/Profile";
import PatientLogin from "./pages/patient/PatientLogin";
import AdminProfile from "./pages/admin/AdminProfile";
import DocterList from "./components/DoctorList";
import AddDoctor from "./pages/admin/AddDoctor";
import { PatientList } from "./pages/admin/PatientList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        <Route path="/PatientRegistration" element={<PatientRegistration/>} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Doctor" element={<Doctor />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/DoctorLogin" element={<DoctorLogin />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/PatientLogin" element={<PatientLogin />} />
        <Route path="/AdminProfile" element={<AdminProfile />} />
        <Route path="/DoctorList" element={<DocterList />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/AddDoctor" element={<AddDoctor />} />
        <Route path="/DoctorList" element={<PatientList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
