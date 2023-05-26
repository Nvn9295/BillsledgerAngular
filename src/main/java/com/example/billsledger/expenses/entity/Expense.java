package com.example.billsledger.expenses.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Blob;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="Expenses")
public class Expense {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String date;
    private String transactionDetails;
    private long amount;
    private String expensesCategory;
    private String source;
    private String spentBy;
//    @Lob
//    private Blob file;
}
