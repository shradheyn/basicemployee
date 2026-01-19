package com.example.employeeservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.employeeservice.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}
//this is used for data access and provides us with functions like
//findAll save findbyid and delete

//it also helps in a seperate DB logic and cleaner architecture