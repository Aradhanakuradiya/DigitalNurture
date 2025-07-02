package com;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public void addBook(String title) {
        System.out.println("🔧 Adding book: " + title);
        bookRepository.saveBook(title);
    }
}
