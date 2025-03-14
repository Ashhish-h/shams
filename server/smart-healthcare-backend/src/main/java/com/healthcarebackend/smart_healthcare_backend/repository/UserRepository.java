package com.healthcarebackend.smart_healthcare_backend.repository;

import org.springframework.stereotype.Repository;
import com.healthcarebackend.smart_healthcare_backend.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface UserRepository extends JpaRepository<Users, Long> {

    // Users findByEmail(String email);

    Users findByUserEmail(String email);

}
