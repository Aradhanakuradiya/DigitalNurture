package com;

import org.springframework.stereotype.Repository;

@Repository
public class BookRepository {
    public void saveBook(String title) {
        System.out.println("📘 Book saved: " + title);
    }
}
