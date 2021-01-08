package com.projetodevsuperior.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projetodevsuperior.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
