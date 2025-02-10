package com.example.studentservice.controller;

import com.example.studentservice.service.FAQService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api/pdf")
@Tag(name = "FAQ Management", description = "Operations for extracting Q&A from PDFs")
public class FAQController {
    @Autowired
    private FAQService faqService;

    @GetMapping("/extract/{fileName}")
    @Operation(summary = "Extract Q&A from PDF", description = "Extracts questions and answers from the given PDF file")
    public ResponseEntity<String> extractQAByQuery(@PathVariable String fileName) {
        System.out.println("from extract file controller");
        return faqService.processPDF(fileName);
    }

    @GetMapping("/extract/home")
    @Operation(summary = "Home test endpoint", description = "Simple test endpoint to check API")
    public String test() {
        return "Welcome";
    }
}