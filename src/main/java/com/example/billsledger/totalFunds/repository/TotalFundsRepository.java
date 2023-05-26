package com.example.billsledger.totalFunds.repository;

import com.example.billsledger.totalFunds.entity.TotalFunds;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TotalFundsRepository extends JpaRepository<TotalFunds,Long> {

    @Query("SELECT e FROM TotalFunds e ORDER BY e.id DESC")
    List<TotalFunds> findLastValue(Pageable pageable);
}
