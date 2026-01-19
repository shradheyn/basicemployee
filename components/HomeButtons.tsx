import Link from "next/link";

export default function HomeButtons() {
  return (
    <div className="container text-center mt-5">
      <h1 className="fw-bold mb-4">Employee Management System</h1>
      <p className="text-muted mb-5">
        Next.js + Spring Boot Microservices
      </p>

      <div className="d-grid gap-3 col-6 mx-auto">
        <Link href="/employees" className="btn btn-primary btn-lg">
          View Employees
        </Link>

        <Link href="/add-employee" className="btn btn-success btn-lg">
          Add Employee
        </Link>

        <Link href="/salary" className="btn btn-warning btn-lg">
          View Nth Highest Salary
        </Link>
      </div>
    </div>
  );
}
