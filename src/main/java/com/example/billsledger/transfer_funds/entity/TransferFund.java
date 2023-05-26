package com.example.billsledger.transfer_funds.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="TransferFunds")
public class TransferFund {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nameId;
    private String date;
    private String transactionThrough;
    private long amount;
    private String destination;
    private String transferredTo;
}
