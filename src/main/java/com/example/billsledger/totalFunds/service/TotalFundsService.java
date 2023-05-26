package com.example.billsledger.totalFunds.service;

import com.example.billsledger.totalFunds.entity.TotalFunds;
import com.example.billsledger.totalFunds.repository.TotalFundsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TotalFundsService {

    @Autowired
    public TotalFundsRepository totalFundsRepository;

    public TotalFunds saveTotalFund(TotalFunds totalFunds){
        List<TotalFunds> totalFund = totalFundsRepository.findLastValue(PageRequest.of(0, 1));
        if (totalFunds.getExpenses() !=null){
            totalFunds.setTotalFunds(totalFund.get(0).getTotalFunds()-totalFunds.getExpenses());
        }
        else if (totalFunds.getFunds() !=null){
            totalFunds.setTotalFunds(totalFund.get(0).getTotalFunds()+totalFunds.getFunds());
        }
        return totalFundsRepository.save(totalFunds);
    }

    public TotalFunds getAvailableFunds() {
        List<TotalFunds> totalFund = totalFundsRepository.findLastValue(PageRequest.of(0, 1));
        return totalFund.get(0);
    }
}
