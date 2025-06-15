// src/pages/EmployeeList.tsx
import { useEmployeeStore } from "../store/useEmployeeStore";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import type { Employee } from "../types/employee";

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
    },
    {
      name: "State",
      selector: (row: Employee) => row.state,
    },
    {
      name: "Zip Code",
      selector: (row: Employee) => row.zipCode,
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Current Employees</h1>
      <DataTable columns={columns} data={employees} pagination />
      <Link to="/" className="text-blue-500 underline mt-4 inline-block">
        Home
      </Link>
    </div>
  );
};
