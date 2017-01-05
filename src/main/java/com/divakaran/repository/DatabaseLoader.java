package com.divakaran.repository;

import com.divakaran.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Repository;

/**
 * @author Divakaran Jeyachandran
 */
@Repository
public class DatabaseLoader implements CommandLineRunner {

    private final ProductRepository productRepository;

    @Autowired
    public DatabaseLoader(ProductRepository repository) {
        productRepository = repository;
    }

    @Override
    public void run(String... args) throws Exception {
        productRepository.save(new Product("Laptop", "$800", "$750"));
        productRepository.save(new Product("macbook", "$1400", "$1480"));
        productRepository.save(new Product("Shirt", "$40", "$80"));
        productRepository.save(new Product("Jacket", "$80", "$180"));
    }
}
