package io.vehiclesregistrationapp.vehicle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class VehicleService {

    @Autowired
    private VehicleRepository vehicleRepository;

    // returns all stored vehicles
    public List<Vehicle> getAllVehicles() {
        List<Vehicle> vehicles = new ArrayList<>();
        vehicleRepository.findAll()
                .forEach(vehicles::add);
        return vehicles;
    }

    // adds vehicle into storage
    public void addVehicle(Vehicle vehicle) {
        vehicle.setVehicleForm();
        vehicleRepository.save(vehicle);
    }

    // updates vehicle and stores updated info
    public void updateVehicle(Vehicle vehicle) {
        vehicleRepository.save(vehicle);
    }

    // deletes vehicle from storage
    public void deleteVehicle(String id) {
        vehicleRepository.deleteById(id);
    }

    // returns vehicle having the passed id (license plate number)
    public Optional<Vehicle> getVehicle(String id) {
        return vehicleRepository.findById(id);
    }
}
