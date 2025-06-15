// src/pages/EmployeeList.tsx
import { useEmployeeStore } from "../store/useEmployeeStore";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import type { Employee } from "../types/employee";
import "./EmployeeList.css";

export const EmployeeList = () => {
  const employees = useEmployeeStore((state) => state.employees);

  const columns = [
    {
      name: "First Name",
      selector: (row: Employee) => row.firstName,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row: Employee) => row.lastName,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row: Employee) => row.startDate,
      sortable: true,
    },
    {
      name: "Department",
      selector: (row: Employee) => row.department,
      sortable: true,
    },
    {
      name: "Date of Birth",
      selector: (row: Employee) => row.dateOfBirth,
      sortable: true,
    },
    {
      name: "Street",
      selector: (row: Employee) => row.street,
    },
    {
      name: "City",
      selector: (row: Employee) => row.city,
      sortable: true,
    },
    {
      name: "State",
      selector: (row: Employee) => row.state,
      sortable: true,
    },
    {
      name: "Zip Code",
      selector: (row: Employee) => row.zipCode,
      sortable: true,
    },
  ];

  return (
    <div className="employee-container">
      <div className="employee-card">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="employee-header">HRnet</h1>
        </Link>
        <h2 className="employee-title">Current Employees</h2>
        <DataTable columns={columns} data={employees} pagination />
      </div>
    </div>
  );
};
