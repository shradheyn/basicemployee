package com.example.employeeservice.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.employeeservice.model.Employee;
import com.example.employeeservice.service.EmployeeService;
//controllee with a response body automatically returns json data
@RestController
@RequestMapping("/employees")
public class EmployeeController {

    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping
    public List<Employee> getEmployees() {
        return employeeService.getAllEmployees();
    }

    @PostMapping
    public Employee addEmployee(@RequestBody Employee employee) {
        return employeeService.saveEmployee(employee);
    }
}
