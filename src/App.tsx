import "./App.css";
import Home from "./pages/Patient/Home";
import About from "./pages/Patient/About";
import DoctorChannel from "./pages/Patient/DoctorChannel";
import Channel from "./pages/Patient/Channel";
import Book from "./pages/Patient/Book";
import Contact from "./pages/Patient/Contact";
import Loging from "./pages/Patient/Loging";
import Payment from "./pages/Patient/Payment";
import DHome from "./pages/Doctor/DHome";
import Form from "./pages/Doctor/Form"; 
import DLoging from "./pages/Doctor/DLoging";
import Register from "./pages/Doctor/Register";
import Schedule from "./pages/Doctor/Schedule";
import AHome from "./pages/Admin/AHome";
import NotFoundPage from "./pages/Patient/NotFoundPage";
import { Profile } from "./pages/Patient/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/DoctorChannel" >
        <Route index element={<DoctorChannel />}/>
          <Route path="Channel" element={<Channel />} />
        </Route>
        <Route path="/Book" element={<Book />} />
        <Route path="/ContactUs" element={<Contact />} />
        <Route path="/Loging" element={<Loging />} />
        <Route path="/Payment" element={<Payment />} />

        <Route path="/DHome" element={<DHome />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/DLoging" element={<DLoging />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/AHome" element={<AHome />} />
        <Route path="/NotFoundPage" element={<NotFoundPage />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
