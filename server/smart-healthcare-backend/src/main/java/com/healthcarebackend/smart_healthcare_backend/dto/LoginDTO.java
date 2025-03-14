package com.healthcarebackend.smart_healthcare_backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginDTO {

    private String userEmail;
    private String userPassword;

    public LoginDTO() {
    }

    public LoginDTO(String userEmail, String userPassword) {
        this.userEmail = userEmail;
        this.userPassword = userPassword;
    }

}
