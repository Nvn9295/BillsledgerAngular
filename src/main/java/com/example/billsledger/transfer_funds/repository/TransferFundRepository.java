package com.example.billsledger.transfer_funds.repository;

import com.example.billsledger.transfer_funds.entity.TransferFund;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransferFundRepository extends JpaRepository<TransferFund,String> {
    TransferFund findById(int id);



    void deleteById(int id);
}
