package com.example.backend.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200") // Autorise Angular
public class TestController {

    @GetMapping("/api/messages")
    public List<String> getMessages() {
        return List.of("Bonjour Soufiane !", "Connexion Docker réussie !", "MySQL, Spring et Angular se parlent !");
    }
}