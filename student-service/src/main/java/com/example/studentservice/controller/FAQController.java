package com.example.studentservice.controller;

import com.example.studentservice.service.FAQService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/api/pdf")
public class FAQController {
    @Autowired
    private FAQService faqService;

    @GetMapping("/extract/{fileName}")
    public ResponseEntity<String> extractQAByQuery(@PathVariable String fileName) {
        System.out.println("from extract file controller");
        return faqService.processPDF(fileName);
    }

    @GetMapping("/extract/home")
    public String test() {
        return "Welcome";
    }
}