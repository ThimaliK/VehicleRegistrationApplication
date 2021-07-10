package io.vehiclesregistrationapp.vehicle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class VehicleController {

    @Autowired
    private VehicleService vehicleService;

    @RequestMapping("/vehicles")
    public List<Vehicle> getAllVehicles() {
        return vehicleService.getAllVehicles();
    }

    @RequestMapping("vehicles/{id}")
    public Optional<Vehicle> getVehicle(@PathVariable String id) {
        return vehicleService.getVehicle(id);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/vehicles")
    public void addVehicle(@RequestBody Vehicle vehicle) {
        vehicleService.addVehicle(vehicle);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/vehicles/{id}")
    public void updateVehicle(@RequestBody Vehicle vehicle, @PathVariable String id) {
        vehicleService.updateVehicle(vehicle);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "vehicles/{id}")
    public void deleteVehicle(@PathVariable String id) {
        vehicleService.deleteVehicle(id);

    }

}
