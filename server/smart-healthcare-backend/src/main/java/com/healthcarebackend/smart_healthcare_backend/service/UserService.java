package com.healthcarebackend.smart_healthcare_backend.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.healthcarebackend.smart_healthcare_backend.dto.UserRegistrationDTO;
import com.healthcarebackend.smart_healthcare_backend.entity.Doctor;
import com.healthcarebackend.smart_healthcare_backend.entity.Patient;
import com.healthcarebackend.smart_healthcare_backend.repository.DoctorRepository;
import com.healthcarebackend.smart_healthcare_backend.repository.PatientRepository;
import com.healthcarebackend.smart_healthcare_backend.repository.UserRepository;
// import lombok.AllArgsConstructor;

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

}
