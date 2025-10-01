package com.tsinjo.portfolio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EntityScan("com.tsinjo.portfolio.model")
@EnableJpaRepositories("com.tsinjo.portfolio.repository")
@ComponentScan(basePackages = "com.tsinjo.portfolio")
public class PortfolioApplication {
    public static void main(String[] args) {
        SpringApplication.run(PortfolioApplication.class, args);
        System.out.println("the application is running successfully");
    }
} 