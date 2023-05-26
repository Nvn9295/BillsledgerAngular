package com.example.billsledger.funds.service;

import com.example.billsledger.expenses.entity.Expense;
import com.example.billsledger.funds.entity.Funds;
import com.example.billsledger.funds.repository.FundsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FundsService {
    @Autowired
    public FundsRepository repository;
    public Funds saveFunds(Funds funds){
        return repository.save(funds);
    }
    public List<Funds> getFunds(){
        return repository.findAll();
    }
    public String deleteFunds(int id){
        repository.deleteById(id);
        return "Funds Deleted"+id;
    }
    public Funds updateFunds(Funds funds){
        Funds existingFunds=repository.findById(funds.getId()).orElse(null);
        existingFunds.setSource(funds.getSource());
        existingFunds.setAmount(funds.getAmount());
        existingFunds.setCreditBy(funds.getCreditBy());
        return repository.save(existingFunds);


    }
}
