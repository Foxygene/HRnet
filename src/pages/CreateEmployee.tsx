import { useState } from "react";
import { useEmployeeStore } from "../store/useEmployeeStore";
import { states } from "../data/states";
import { Dropdown } from "react-dropdown-pe";
import "./CreateEmployee.css";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-modal";

const departments = [
  "Sales",
  "Marketing",
  "Engineering",
  "Human Resources",
  "Legal",
];

Modal.setAppElement("#root");

export const CreateEmployee = () => {
  const addEmployee = useEmployeeStore((state) => state.addEmployee);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    department: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    dateOfBirth: "",
    startDate: "",
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (
    name: "dateOfBirth" | "startDate",
    date: Date | null
  ) => {
    setFormData((prev) => ({
      ...prev,
      [name]: date ? date.toISOString().split("T")[0] : "",
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addEmployee(formData);
    setModalIsOpen(true);
    setFormData({
      firstName: "",
      lastName: "",
      department: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      dateOfBirth: "",
      startDate: "",
    });
  };

  return (
    <div className="container">
      <h1 className="header">HRnet</h1>
      <Link to="/employees" className="link">
        View Current Employees
      </Link>
      <h2 className="title">Create Employee</h2>

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
          <DatePicker
            selected={
              formData.dateOfBirth ? new Date(formData.dateOfBirth) : null
            }
            onChange={(date) => handleDateChange("dateOfBirth", date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select date of birth"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
          />
        </label>

        <label>
          Start Date:
          <DatePicker
            selected={formData.startDate ? new Date(formData.startDate) : null}
            onChange={(date) => handleDateChange("startDate", date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select start date"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
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

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Employee Created"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Employee successfully created!</h2>
        <button
          className="modal-btn secondary"
          onClick={() => setModalIsOpen(false)}
        >
          Close
        </button>
        <button className="modal-btn" onClick={() => navigate("/employees")}>
          View Employees
        </button>
      </Modal>
    </div>
  );
};
