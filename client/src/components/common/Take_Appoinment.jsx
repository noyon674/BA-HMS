import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const doctors = [
  { id: 1, name: "Dr. John Doe - Cardiologist" },
  { id: 2, name: "Dr. Jane Smith - Dermatologist" },
  { id: 3, name: "Dr. Emily Brown - Neurologist" },
];

export default function AppointmentBooking() {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSubmit = () => {
    if (!selectedDoctor) {
      alert("Please select a doctor");
      return;
    }
    alert(
      `Appointment booked with ${selectedDoctor} on ${selectedDate.toDateString()}`
    );
  };

  return (
    <div className="bg-bgsecondary pt-32 pb-20">
      <div className="max-w-6xl h-96 mx-auto flex">
        <div className="basis-1/2">
          <img
            src="./assets/images/appointment.jpg"
            alt=""
            className="rounded-md h-full"
          />
        </div>
        <div className="basis-1/2 flex items-center rounded-r-md">
          <div className="w-full px-14">
            <h2 className="text-3xl font-semibold mb-4">Book an Appointment</h2>
            <form action="" onSubmit={handleSubmit}>
              <label className="block mb-2">Full Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md mb-4"
              />
              <label className="block mb-2">Select Doctor</label>
              <select
                className="w-full p-2 border rounded-md mb-4 "
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
              >
                <option value="">-- Choose a Doctor --</option>
                {doctors.map((doc) => (
                  <option key={doc.id} value={doc.name}>
                    {doc.name}
                  </option>
                ))}
              </select>
              <label className="block mb-2">Select Date</label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                minDate={new Date()} // Prevents selecting past dates
                className="w-full p-2 border rounded-md"
              />
              <button
                type="submit"
                className="mt-4 w-full bg-borderbg cursor-pointer hover:text-white p-2 rounded-md text-bgprimary"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
