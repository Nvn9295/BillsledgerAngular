package com.example.billsledger.expenses.controller;

import com.example.billsledger.expenses.entity.Expense;
import com.example.billsledger.expenses.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
public class ExpenseController {
    @Autowired
    private ExpenseService service;
    @PostMapping("/addExpense")
    public Expense addExpense(@RequestBody Expense expense){
        return service.saveExpense(expense);
    }
    @PostMapping("/addExpenses")
    public List<Expense> addExpenses(@RequestBody List<Expense> expenses){
        return service.saveExpenses(expenses);
    }
    @GetMapping("/getExpenses")
    public List<Expense> findAllExpenses(){
        return service.getExpenses();
    }
    @GetMapping("/getExpenseSpentBy/{spentBy}")
    public List<Expense> findBySpentBy(@PathVariable String spentBy){
        return service.getExpensesSpentBy(spentBy);
    }
    @GetMapping("/getExpenseById/{id}")
    public Expense findById(@PathVariable int id){
        return service.getExpenseById(id);
    }
    @PutMapping("/updateExpense")
    public Expense updateExpense(@RequestBody Expense expense){
        return service.updateExpesnse(expense);

    }
    @DeleteMapping("/deleteExpense/{id}")
    public String deleteExpense(@PathVariable int id){
        return service.deleteExpense(id);
    }
}
