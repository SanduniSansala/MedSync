import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import bgimg from "../../assets/images/1.png";
import { getByspecialty, getAll } from "../../services/DoctorRoutes";

const DoctorChannel: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    // Get the selected specialty and optional doctor name
    const specialty = formData.get("name")?.toString() || "Select";
    const doctorName = formData.get("special")?.toString() || "";

    try {
      let doctors;
      if (specialty === "Select") {
        // Fetch all doctors if "Select" is chosen
        doctors = await getAll();
      } else {
        // Otherwise, fetch doctors by the selected specialty
        doctors = await getByspecialty(specialty);
      }
      console.log("Doctors fetched:", doctors);

      // Check if any doctors are returned
      if (doctors && doctors.length > 0) {
        // Navigate to the Channel page passing the data via state
        navigate("/DoctorChannel/Channel", { state: { doctors, specialty, doctorName } });
      } else {
        alert(`No doctors available for ${specialty}. Please try another specialization.`);
      }
    } catch (error) {
      console.error("Error fetching doctors:", error);
      alert("There was an error fetching doctors. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex flex-col">
      <Header />
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center p-4 bg-primary-green"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundBlendMode: "overlay",
          backgroundColor: "",
        }}
      >
        <div className="bg-white/30 backdrop-blur-sm rounded-xl shadow-2xl max-w-md w-full p-8 border border-blue-100">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-blue-800 mb-2">
              Channel Your Doctor
            </h2>
            <p className="text-gray-600">Find the best doctors for you</p>
          </div>

          <form
            className="space-y-6 focus:outline-none focus:ring-secondary-color focus:border-secondary-color"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                <span className="flex items-center">Specialization</span>
              </label>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                name="name"
              >
                <option>Select</option>
                <option>Cardiology</option>
                <option>Dermatology</option>
                <option>Neurology</option>
                <option>Oncologist</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                <span className="flex items-center">Doctor</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                name="special"
                placeholder="Enter doctor's name (optional)"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-[1.02] shadow-md hover:shadow-lg"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorChannel;
