package com.example.datn.service;

import com.example.datn.model.User;
import com.example.datn.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User registerUser(User newUser) {
        // Kiểm tra xem email đã tồn tại hay chưa
        if (userRepository.findByEmail(newUser.getEmail()) != null) {
            throw new RuntimeException("Email đã tồn tại!");
        }

        // Mã hóa mật khẩu (có thể sử dụng bcrypt, ...)
        // Ví dụ đơn giản, không nên lưu mật khẩu dưới dạng plaintext
        String hashedPassword = newUser.getPassword();
        newUser.setPassword(hashedPassword);

        return userRepository.save(newUser);
    }

    public User loginUser(String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }
}
