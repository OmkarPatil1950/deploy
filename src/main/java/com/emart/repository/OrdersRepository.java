package com.emart.repository;

import com.emart.entities.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 * Repository interface for managing Orders entities.
 */
@Repository
@Transactional
public interface OrdersRepository extends JpaRepository<Orders, Integer> {

    // No additional methods to be added in this interface

}
