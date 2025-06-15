import { useState } from "react";
import { useEmployeeStore } from "../store/useEmployeeStore";
import { states } from "../data/states";
import { Dropdown } from "../components/Dropdown/Dropdown";
import "./CreateEmployee.css";
import { Link } from "react-router-dom";

const departments = [
  "Sales",
  "Marketing",
  "Engineering",
  "Human Resources",
  "Legal",
];

export const CreateEmployee = () => {
  const addEmployee = useEmployeeStore((state) => state.addEmployee);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    startDate: "",
    department: "",
    dateOfBirth: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addEmployee(formData);
    alert("Employee successfully created!");
    setFormData({
      firstName: "",
      lastName: "",
      startDate: "",
      department: "",
      dateOfBirth: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
    });
  };

  return (
    <div className="container">
      <h1 className="header">HRnet</h1>
      <h2 className="title">Create Employee</h2>
      <Link to="/employees" className="link">
        View Current Employees
      </Link>
      <form onSubmit={handleSubmit} className="form">
        <label>
          First Name:
          <input
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>

        <label>
          Last Name:
          <input
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>

        <label>
          Date of Birth:
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </label>

        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </label>

        <label className="address">
          Street:
          <input
            name="street"
            placeholder="Street"
            value={formData.street}
            onChange={handleChange}
          />
        </label>

        <label>
          City:
          <input
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
        </label>

        <label>
          State:
          <Dropdown
            label="State"
            options={states.map((state) => ({
              label: state.name,
              value: state.abbreviation,
            }))}
            value={formData.state}
            onChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                state: value,
              }))
            }
          />
        </label>

        <label>
          Zip Code:
          <input
            name="zipCode"
            placeholder="Zip Code"
            value={formData.zipCode}
            onChange={handleChange}
          />
        </label>

        <label>
          Department:
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
          >
            <option value="">Select a department</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">Create Employee</button>
      </form>
    </div>
  );
};
