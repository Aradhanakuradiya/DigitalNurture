package com.cognizant.jwt.service;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;
import java.util.*;
public class MyUserDetailsService implements UserDetailsService{
    @Override
    public UserDetails loadUserByUsername(String username) {
        if ("user".equals(username)) {
            return User.withUsername("user")
                    .password("{noop}pwd")
                    .roles("USER")
                    .build();
        }
        throw new UsernameNotFoundException("User not found");
    }
}
