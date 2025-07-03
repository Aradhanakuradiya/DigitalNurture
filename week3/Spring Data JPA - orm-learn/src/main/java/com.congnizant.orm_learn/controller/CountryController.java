package com.congnizant.orm_learn.controller;

import com.congnizant.orm_learn.Country;
import com.congnizant.orm_learn.Service.CountryService;
import com.congnizant.orm_learn.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CountryController {
    @Autowired
    private CountryService countryService;

    @GetMapping("/")
    public List<Country> getCountries(){
        return countryService.getAllCountries();
    }
}
