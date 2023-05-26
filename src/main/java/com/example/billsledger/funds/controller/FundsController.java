package com.example.billsledger.funds.controller;

import com.example.billsledger.expenses.entity.Expense;
import com.example.billsledger.funds.entity.Funds;
import com.example.billsledger.funds.service.FundsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
public class FundsController {
    @Autowired
    public FundsService service;
    @PostMapping("/addFunds")
    public Funds addFunds(@RequestBody Funds funds){
        return service.saveFunds(funds);

    }
    @GetMapping("/getFunds")
    public List<Funds> getFunds(){
        return service.getFunds();
    }
    @DeleteMapping("/deleteFunds/{id}")
    public String deleteFunds(@PathVariable int id){
      return   service.deleteFunds(id);
    }

    @PutMapping("/updateFunds")
    public Funds updateFunds(@RequestBody Funds funds){
        return service.updateFunds(funds);
    }

}
