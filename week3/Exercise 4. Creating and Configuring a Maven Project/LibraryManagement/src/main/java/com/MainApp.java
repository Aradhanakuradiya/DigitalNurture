package com;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/books")
public class MainApp {
    public static void main(String[] args) {
       
    @Autowired
    private BookService bookService;

    @PostMapping
    public String createBook(@RequestParam String title) {
        bookService.addBook(title);
        return "✅ Book added: " + title;
    }

    @GetMapping
    public String welcome() {
        return "📚 Welcome to the Library API!";
    }
    }
}
