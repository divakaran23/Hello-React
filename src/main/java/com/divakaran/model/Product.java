package com.divakaran.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * @author Divakaran Jeyachandran
 */
@Data
@Entity
public class Product {

    private @Id @GeneratedValue Long id;
    private String name;
    private String currentPrice;
    private String previousPrice;

    public Product() {
    }

    public Product(String name, String currentPrice, String previousPrice) {
        this.name = name;
        this.currentPrice = currentPrice;
        this.previousPrice = previousPrice;
    }
}
