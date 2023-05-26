package com.example.billsledger.user.repository;

import com.example.billsledger.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
