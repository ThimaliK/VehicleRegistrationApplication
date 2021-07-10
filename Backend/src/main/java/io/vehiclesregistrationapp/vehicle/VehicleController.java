package io.vehiclesregistrationapp.vehicle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class VehicleController {

    //basic CRUD operations are carried out here (task 3)

    @Autowired
    private VehicleService vehicleService;

    // gets all registered vehicles
    @RequestMapping("/vehicles")
    public List<Vehicle> getAllVehicles() {
        return vehicleService.getAllVehicles();
    }

    // gets a vehicle having the passed id (license plate number)
    @RequestMapping("vehicles/{id}")
    public Optional<Vehicle> getVehicle(@PathVariable String id) {
        return vehicleService.getVehicle(id);
    }

    // adds a new vehicle into storage
    @RequestMapping(method = RequestMethod.POST, value = "/vehicles")
    public void addVehicle(@RequestBody Vehicle vehicle) {
        vehicleService.addVehicle(vehicle);
    }

    // updates the vehicle having the passed id (license plate number)
    @RequestMapping(method = RequestMethod.PUT, value = "/vehicles/{id}")
    public void updateVehicle(@RequestBody Vehicle vehicle, @PathVariable String id) {
        vehicleService.updateVehicle(vehicle);
    }

    // deletes the vehicle having the passed id (license plate number)
    @RequestMapping(method = RequestMethod.DELETE, value = "vehicles/{id}")
    public void deleteVehicle(@PathVariable String id) {
        vehicleService.deleteVehicle(id);

    }

}
