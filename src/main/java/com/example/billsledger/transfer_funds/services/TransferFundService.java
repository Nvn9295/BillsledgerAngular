package com.example.billsledger.transfer_funds.services;

import com.example.billsledger.transfer_funds.entity.TransferFund;
import com.example.billsledger.transfer_funds.repository.TransferFundRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransferFundService {
    @Autowired
    public TransferFundRepository repository;
    public TransferFund saveTransferFund(TransferFund transferFund){
        return repository.save(transferFund);
    }
    public List<TransferFund> getTransferFunds(){
        return repository.findAll();
    }
    public TransferFund getTransferFundById(int id){
        return repository.findById(id);
    }
    public String deleteTransferFund(int id){
        repository.deleteById(id);
        return "TransferFund Deleted"+id;
    }
    public TransferFund updateTransferFund(TransferFund transferFund){

        TransferFund existingTransferFund=repository.findById(transferFund.getId());
        existingTransferFund.setDate(transferFund.getDate());
        existingTransferFund.setAmount(transferFund.getAmount());
        existingTransferFund.setTransactionThrough(transferFund.getTransactionThrough());
        existingTransferFund.setDestination(transferFund.getDestination());
        existingTransferFund.setTransferredTo(transferFund.getTransferredTo());
        return repository.save(existingTransferFund);

    }


}
