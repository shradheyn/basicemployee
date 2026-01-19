"use client";

import { useState } from "react";
import Link from "next/link";

export default function AddEmployeeForm() {
  const [employee, setEmployee] = useState({
    name: "",
    age: "",
    salary: "",
  });

  const addEmployee = () => {
    fetch("http://localhost:8080/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: employee.name,
        age: Number(employee.age),
        salary: Number(employee.salary),
      }),
    }).then(() => {
      alert("Employee added successfully");
      setEmployee({ name: "", age: "", salary: "" });
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Add Employee</h2>

      <input
        className="form-control mb-3"
        placeholder="Name"
        value={employee.name}
        onChange={(e) =>
          setEmployee({ ...employee, name: e.target.value })
        }
      />

      <input
        type="number"
        className="form-control mb-3"
        placeholder="Age"
        value={employee.age}
        onChange={(e) =>
          setEmployee({ ...employee, age: e.target.value })
        }
      />

      <input
        type="number"
        className="form-control mb-3"
        placeholder="Salary"
        value={employee.salary}
        onChange={(e) =>
          setEmployee({ ...employee, salary: e.target.value })
        }
      />

      <button className="btn btn-success" onClick={addEmployee}>
        Add Employee
      </button>

      <Link href="/" className="btn btn-secondary ms-3">
        Back to Home
      </Link>
    </div>
  );
}
