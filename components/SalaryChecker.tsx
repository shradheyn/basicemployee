"use client";

import { useState } from "react";
import Link from "next/link";

type SalaryResult = {
  name: string;
  salary: number;
};

export default function SalaryChecker() {
  const [rank, setRank] = useState(2);
  const [result, setResult] = useState<SalaryResult | null>(null);

  const fetchSalary = () => {
    fetch(`http://localhost:8081/salary/nth/${rank}`)
      .then((res) => res.json())
      .then((data) => setResult(data));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Nth Highest Salary</h2>

      <div className="d-flex gap-3 mb-3">
        <input
          type="number"
          className="form-control w-25"
          value={rank}
          min={1}
          onChange={(e) => setRank(Number(e.target.value))}
        />
        <button className="btn btn-primary" onClick={fetchSalary}>
          Fetch
        </button>
      </div>

      {result && (
        <div className="alert alert-info">
          <strong>Name:</strong> {result.name} <br />
          <strong>Salary:</strong> {result.salary}
        </div>
      )}

      <Link href="/" className="btn btn-secondary">
        Back to Home
      </Link>
    </div>
  );
}
