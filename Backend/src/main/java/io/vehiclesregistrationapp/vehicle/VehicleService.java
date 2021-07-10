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

//    public List<Vehicle> getVehicles(String userId) {
//        List<Vehicle> vehicles = new ArrayList<>();
//        vehicleRepository.findById(userId)
//                .forEach(vehicles::add);
//        return vehicles;
//    }

    public List<Vehicle> getAllVehicles() {
        List<Vehicle> vehicles = new ArrayList<>();
        vehicleRepository.findAll()
                .forEach(vehicles::add);
        return vehicles;
    }

    public void addVehicle(Vehicle vehicle) {
        vehicle.setVehicleForm();
        vehicleRepository.save(vehicle);
    }

    public void updateVehicle(Vehicle vehicle) {
        vehicleRepository.save(vehicle);
    }

    public void deleteVehicle(String id) {
        vehicleRepository.deleteById(id);
    }

    public Optional<Vehicle> getVehicle(String id) {
        return vehicleRepository.findById(id);
    }
}
