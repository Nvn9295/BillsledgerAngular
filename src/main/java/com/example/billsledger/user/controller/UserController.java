package com.example.billsledger.user.controller;

import com.example.billsledger.user.entity.User;
import com.example.billsledger.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping
public class UserController {
    @Autowired
    public UserService service;
    @PostMapping("/add-user")
    public User adduser(@RequestBody User user){
        return service.addUser( user);
    }
    @GetMapping("/get-user")
    public List<User> getUsers(){
     return service.getUsers();
    }
    @DeleteMapping("/delete-user/{id}")
    public void deleteUser(@PathVariable long id){
        service.deleteUserById(id);
    }
}

