package com.example.billsledger.transfer_funds.controller;

import com.example.billsledger.funds.entity.Funds;
import com.example.billsledger.transfer_funds.entity.TransferFund;
import com.example.billsledger.transfer_funds.services.TransferFundService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")

public class TransferFundController {
    @Autowired
    public TransferFundService service;
    @PostMapping("/addTransferFund")
    public TransferFund addTransferFund(@RequestBody TransferFund transferFund){
        return service.saveTransferFund(transferFund);
        }
        @GetMapping("/getTransferFunds")
        public List<TransferFund> getTransferFunds(){
        return service.getTransferFunds();
        }
        @GetMapping("/getTransferFund/{id}")
        public TransferFund getTransferFundByNameId(@PathVariable int id){
        return service.getTransferFundById(id);
        }
        @DeleteMapping("/deleteTransferFund/{id}")
        public String deleteTransferFund(@PathVariable int id){
        return service.deleteTransferFund(id);
        }
        @PutMapping("/updateTransferFund/{nameId}")
        public TransferFund updateTransferFund(@RequestBody TransferFund transferFund){
        return service.updateTransferFund(transferFund);
        }

}
