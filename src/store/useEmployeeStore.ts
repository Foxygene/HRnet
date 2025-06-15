import { create } from "zustand";
import employeeListMock from "../mocks/employeeListMock.json";

type Employee = {
  firstName: string;
  lastName: string;
  startDate: string;
  department: string;
  dateOfBirth: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
};

type EmployeeStore = {
  employees: Employee[];
  addEmployee: (employee: Employee) => void;
  clearEmployees: () => void;
};

export const useEmployeeStore = create<EmployeeStore>((set) => ({
  employees: employeeListMock as Employee[],
  addEmployee: (employee) =>
    set((state) => ({
      employees: [...state.employees, employee],
    })),
  clearEmployees: () => set({ employees: [] }),
}));
