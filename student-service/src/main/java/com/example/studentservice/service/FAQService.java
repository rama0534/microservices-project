package com.example.studentservice.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class FAQService {
    public FAQService() {}

    public ResponseEntity<String> processPDF(String fileName) {
        try {
            ClassPathResource pdfResource = new ClassPathResource(fileName);
            InputStream inputStream = pdfResource.getInputStream();

            List<Map<String, String>> qaList = extractQuestionsAndAnswers(inputStream);
            String jsonOutput = convertToJson(qaList);

            return ResponseEntity.ok(jsonOutput);
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Error processing PDF: " + e.getMessage());
        }
    }

    private List<Map<String, String>> extractQuestionsAndAnswers(InputStream inputStream) throws IOException {
        List<Map<String, String>> qaList = new ArrayList<>();

        try (PDDocument document = PDDocument.load(inputStream)) {
            PDFTextStripper pdfStripper = new PDFTextStripper();
            String text = pdfStripper.getText(document);

            Pattern pattern = Pattern.compile("(\\d+)\\.\\s*(.*?\\?)\\s*\\n(.*?)(?=\\n\\d+\\.\\s*|$)", Pattern.DOTALL);
            Matcher matcher = pattern.matcher(text);

            while (matcher.find()) {
                Map<String, String> qaMap = new HashMap<>();

                String question = matcher.group(2).trim();
                String answer = matcher.group(3).trim();


                answer = answer.replaceAll("\\s*\\n\\s*", " "); // Converts line breaks into spaces
                answer = answer.replaceAll("Answer:","");
                question = question.replaceAll("^\\s+|\\s+$", "").replaceAll("\\s+", " ");

                qaMap.put("question", question);
                qaMap.put("answer", answer);
                qaList.add(qaMap);
            }
        }
        return qaList;
    }

    private String convertToJson(List<Map<String, String>> qaList) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(qaList);
    }

}
