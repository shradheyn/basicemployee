"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Employee = {
  id: number;
  name: string;
  age: number;
  salary: number;
};

export default function EmployeesList() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">All Employees</h2>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((e) => (
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link href="/" className="btn btn-secondary mt-3">
        Back to Home
      </Link>
    </div>
  );
}
