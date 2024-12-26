import React, { useState } from "react";

const StaffForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dateOfBirth: "",
    dateOfJoining: "",
    department: "",
    position: "",
    workSchedule: "",
    salary: "",
    documentation: null,
  });

  const positions = {
    Management: ["General Manager", "Assistant Manager", "Floor Manager"],
    "Kitchen Staff": [
      "Head Chef",
      "Sous Chef",
      "Line Cook",
      "Pastry Chef",
      "Commis Chef",
      "Dishwasher",
    ],
    "Service Staff": [
      "Waiter/Waitress",
      "Host/Hostess",
      "Bartender",
      "Barista",
      "Busboy/Busgirl (Server Assistant)",
    ],
    "Cleaning and Maintenance": ["Cleaner", "Maintenance Staff"],
    "Cash Handling and Admin": ["Cashier", "Accountant", "Receptionist"],
    Delivery: ["Delivery Driver", "Packager"],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, documentation: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-orange-100 border border-orange-200 shadow-lg rounded-md">
      <h2 className="text-2xl font-bold mb-4">Staff Details Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
            required
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="dateOfBirth"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
            required
          />
        </div>

        {/* Date of Joining */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="dateOfJoining"
          >
            Date of Joining
          </label>
          <input
            type="date"
            id="dateOfJoining"
            name="dateOfJoining"
            value={formData.dateOfJoining}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
            required
          />
        </div>

        {/* Department */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="department"
          >
            Department
          </label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
            required
          />
        </div>

        {/* Position */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="position">
            Position
          </label>
          <select
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
            required
          >
            <option value="">Select Position</option>
            {Object.entries(positions).map(([category, roles]) => (
              <optgroup key={category} label={category}>
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        {/* Work Schedule/Shift */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="workSchedule"
          >
            Work Schedule/Shift
          </label>
          <input
            type="text"
            id="workSchedule"
            name="workSchedule"
            value={formData.workSchedule}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
            required
          />
        </div>

        {/* Salary */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="salary">
            Salary
          </label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
            required
          />
        </div>

        {/* Documentation Upload */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="documentation"
          >
            Documentation Upload
          </label>
          <input
            type="file"
            id="documentation"
            name="documentation"
            onChange={handleFileChange}
            className="w-full text-sm text-orange-500 border border-orange-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StaffForm;
