package com.divakaran.repository;

import com.divakaran.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Divakaran Jeyachandran
 */
public interface ProductRepository extends JpaRepository<Product, Long> {
}
