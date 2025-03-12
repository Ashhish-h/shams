package com.healthcarebackend.smart_healthcare_backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "doctor_table")
public class Doctor extends Users{

    private int experienceInYears;
    private String clinicAssociaton;

    @Override
    public String getRole(){
        return "Doctor";
    }
}
