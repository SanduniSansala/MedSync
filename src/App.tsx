import "./App.css";
import Home from "./pages/Patient/Home";
import About from "./pages/Patient/About";
import DoctorChannel from "./pages/Patient/DoctorChannel";
import Channel from "./pages/Patient/Channel";
import Book from "./pages/Patient/Book";
import Contact from "./pages/Patient/Contact";
import PatientRegistation from "./pages/Patient/PatientRegistation";
import Payment from "./pages/Patient/Payment";
import Doctor from "./pages/Doctor/Doctor";
import Form from "./pages/Admin/AddDoctor"
import DoctorLogin from "./pages/Doctor/DoctorLogin";
import Schedule from "./pages/Doctor/Schedule";
import Admin from "./pages/Admin/Admin";
import NotFoundPage from "./pages/Patient/NotFoundPage";
import Profile from "./pages/Patient/Profile";
import PatientLogin from "./pages/Patient/PatientLogin";
import AdminProfile from "./pages/Admin/AdminProfile";
import DocterList from "./components/DoctorList";
import AddDoctor from "./pages/Admin/AddDoctor";
import Docprofile from "./pages/doctor/Docprofile";
import { PatientList } from "./pages/Admin/PatientList";
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
        <Route path="/PatientRegistation" element={<PatientRegistation/>} />
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
        <Route path="/Docprofile" element={<Docprofile />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
