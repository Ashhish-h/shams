package com.healthcarebackend.smart_healthcare_backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "patient_table")
public class Patient extends Users{

    private int age;

    @Override
    public String getRole(){
        return "Patient";
    }
    
}
