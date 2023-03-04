package com.example.demo.service;

import com.example.demo.domain.IUser;
import com.example.demo.domain.User;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final ApplicationContext applicationContext;

    public UserService(ApplicationContext applicationContext) {
        this.applicationContext = applicationContext;
    }

    public String hello() {
        final IUser temp = (IUser) applicationContext.getBean("user");
        if (temp instanceof User) {
            return temp.hello();
        }
        return "hello no service";
    }
}
