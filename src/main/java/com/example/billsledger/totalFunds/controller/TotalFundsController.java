package com.example.billsledger.totalFunds.controller;

import com.example.billsledger.totalFunds.entity.TotalFunds;
import com.example.billsledger.totalFunds.service.TotalFundsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:4200")
public class TotalFundsController {

    @Autowired
    private TotalFundsService totalFundsService;

    @GetMapping("available-funds")
    public TotalFunds getAvailableFunds(){
        return totalFundsService.getAvailableFunds();
    }
}
