package com.example.Quanlysukien.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.Quanlysukien.model.User;
import com.example.Quanlysukien.service.AuthService;

@RestController
@RequestMapping("/api")
public class AuthController {
  @Autowired
  private AuthService authService;

  @PostMapping("/register")
  public ResponseEntity<?> registerUser(@RequestBody User user) {
    User registeredUser = authService.registerUser(user.getEmail(), user.getPassword());
    return ResponseEntity.ok(registeredUser);
  }

  @PostMapping("/login")
  public ResponseEntity<?> loginUser(@RequestBody User user) {
    User loggedInUser = authService.loginUser(user.getEmail(), user.getPassword());
    if (loggedInUser != null) {
      return ResponseEntity.ok(loggedInUser);
    } else {
      return ResponseEntity.status(401).body("Email hoặc mật khẩu không đúng");
    }
  }
}
