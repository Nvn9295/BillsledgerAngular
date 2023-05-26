package com.example.billsledger.totalFunds.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name="TotalFunds")
public class TotalFunds {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;
    @Column(name="ExpensesAmount")
    private Double expenses;
    @Column(name="FundsAmount")
    private Double funds;
    @Column(name="RunningFunds")
    private Double totalFunds;

}
