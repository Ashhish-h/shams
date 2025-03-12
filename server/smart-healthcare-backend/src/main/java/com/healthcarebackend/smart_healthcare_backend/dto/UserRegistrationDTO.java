package com.healthcarebackend.smart_healthcare_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserRegistrationDTO {

    private String name;
    private String email;
    private String password;
    private String role; // Either "patient" or "doctor"
    private String mobileNo;

    // Patient-specific fields
    private Integer age; // Patient's age

    // Doctor-specific fields
    private Integer experience; // Doctor's experience
    private String clinic; // Doctor's associated clinic

}
