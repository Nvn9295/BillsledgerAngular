package com.example.billsledger.funds.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="Funds")
public class Funds {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String source;
    private String creditBy;
    private Long amount;

}
