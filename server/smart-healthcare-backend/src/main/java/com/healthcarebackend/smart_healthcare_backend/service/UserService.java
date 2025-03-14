package com.healthcarebackend.smart_healthcare_backend.service;

import org.springframework.http.HttpStatus;
// import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.healthcarebackend.smart_healthcare_backend.dto.LoginDTO;
// import com.healthcarebackend.smart_healthcare_backend.dto.LoginRequestDTO;
import com.healthcarebackend.smart_healthcare_backend.dto.UserRegistrationDTO;
import com.healthcarebackend.smart_healthcare_backend.entity.Doctor;
import com.healthcarebackend.smart_healthcare_backend.entity.Patient;
import com.healthcarebackend.smart_healthcare_backend.entity.Users;
import com.healthcarebackend.smart_healthcare_backend.repository.DoctorRepository;
import com.healthcarebackend.smart_healthcare_backend.repository.PatientRepository;
import com.healthcarebackend.smart_healthcare_backend.repository.UserRepository;

@Service
public class UserService {
    private UserRepository userRepository;
    private PatientRepository patientRepository;
    private DoctorRepository doctorRepository;

    public UserService(UserRepository userRepository, PatientRepository patientRepository,
            DoctorRepository doctorRepository) {
        this.userRepository = userRepository;
        this.patientRepository = patientRepository;
        this.doctorRepository = doctorRepository;
    }

    
    // login request
    public ResponseEntity<?> login(LoginDTO loginDTO) {
    Users existingUser =
    userRepository.findByUserEmail(loginDTO.getUserEmail());
    if (existingUser == null) {
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
    }
    if (!existingUser.getUserPassword().equals(loginDTO.getUserPassword())) {
    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
    }
    return ResponseEntity.ok("Login successful");
    }

    // for registering a user
    public ResponseEntity<?> registerUser(UserRegistrationDTO userDTO) {
        if (userDTO.getRole().equalsIgnoreCase("patient")) {
            Patient patient = new Patient(userDTO.getName(), userDTO.getEmail(), userDTO.getAge(),
                    userDTO.getPassword(), userDTO.getMobileNo());
            patientRepository.save(patient);
        } else if ((userDTO.getRole().equalsIgnoreCase("doctor"))) {
            Doctor doctor = new Doctor(userDTO.getName(), userDTO.getEmail(), userDTO.getExperience(),
                    userDTO.getClinic(), userDTO.getPassword(), userDTO.getMobileNo());
            doctorRepository.save(doctor);
        }

        return ResponseEntity.ok("User registered successfully");
    }

    // for deleting a user
    public ResponseEntity<?> deleteUser(Long id) {
        userRepository.deleteById(id);
        return ResponseEntity.ok("User deleted successfully");
    }

}
