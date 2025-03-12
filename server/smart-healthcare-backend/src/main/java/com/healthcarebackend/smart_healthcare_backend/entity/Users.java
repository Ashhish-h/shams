package com.healthcarebackend.smart_healthcare_backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter // for automatically generating getters
@Setter // for automatically generating setters
@AllArgsConstructor // for automatically generating a consturctor with all arg
@NoArgsConstructor // for for automatically generating a consturctor with no arg
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "Users")
public abstract class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // for automatically generating ID value
    private long id;

    private String userName;
    private String userEmail;
    private String mobileNo;
    private String userPassword;

    // for child classes to define getRote()
    public abstract String getRole();

}
