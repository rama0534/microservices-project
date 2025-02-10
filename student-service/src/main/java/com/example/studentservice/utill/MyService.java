package com.example.studentservice.utill;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

@Component
public class MyService {

    @Autowired
    private Environment env;

    public void printProperty() {
        String value = env.getProperty("my.property");
        System.out.println("Property value: " + value);
    }
}