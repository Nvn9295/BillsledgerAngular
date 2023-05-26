package com.example.billsledger.expenses.service;

import com.example.billsledger.expenses.entity.Expense;
import com.example.billsledger.expenses.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseService {
    @Autowired
    public ExpenseRepository repository;
    public Expense saveExpense(Expense expense){
        return repository.save(expense);
    }
    public List<Expense> saveExpenses(List<Expense> expenses){
        return repository.saveAll(expenses);
    }
    public List<Expense> getExpenses(){
        return repository.findAll();

    }
    public List<Expense> getExpensesSpentBy(String spentBy){
        return repository.findAllBySpentBy(spentBy);
    }
    public Expense getExpenseById(int id){

        return repository.findById(id).orElse(null);
    }
    public String deleteExpense(int id){
        repository.deleteById(id);
        return "Expense Delete "+id;
    }
    public Expense updateExpesnse(Expense expense){
        Expense existingExpense=repository.findById(expense.getId()).orElse(null);
        existingExpense.setDate(expense.getDate());
        existingExpense.setTransactionDetails(expense.getTransactionDetails());
        existingExpense.setExpensesCategory(expense.getExpensesCategory());
        existingExpense.setAmount(expense.getAmount());
        existingExpense.setSource(expense.getSource());
        existingExpense.setSpentBy(expense.getSpentBy());
//        existingExpense.setFile(expense.getFile());
        return repository.save(existingExpense);
    }

}
