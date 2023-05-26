package com.example.billsledger.user.service;

import com.example.billsledger.transfer_funds.entity.TransferFund;
import com.example.billsledger.transfer_funds.repository.TransferFundRepository;
import com.example.billsledger.user.entity.User;
import com.example.billsledger.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    public UserRepository repository;
    public User addUser(User user){
        return repository.save(user);
    }
    public List<User> getUsers(){
        return repository.findAll();
    }
    public void deleteUserById(Long id){
        repository.deleteById(id);
//        return "User Deleted Successfully";
    }


}
