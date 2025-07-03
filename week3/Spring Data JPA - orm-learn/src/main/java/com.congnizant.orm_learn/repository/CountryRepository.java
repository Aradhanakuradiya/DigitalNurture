package com.congnizant.orm_learn.repository;

import com.congnizant.orm_learn.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CountryRepository extends JpaRepository<Country,String> {

}
