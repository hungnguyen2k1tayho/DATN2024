package com.example.Quanlysukien.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.example.Quanlysukien.model.User;
import com.example.Quanlysukien.repository.UserRepository;

@Service
public class AuthService {
  @Autowired
  private UserRepository userRepository;

  @Autowired
  private BCryptPasswordEncoder passwordEncoder;

  public User registerUser(String email, String password) {
    User user = new User();
    user.setEmail(email);
    user.setPassword(passwordEncoder.encode(password));
    return userRepository.save(user);
  }

  public User loginUser(String email, String password) {
    User user = userRepository.findByEmail(email);
    if (user != null && passwordEncoder.matches(password, user.getPassword())) {
      return user;
    }
    return null;
  }
}
