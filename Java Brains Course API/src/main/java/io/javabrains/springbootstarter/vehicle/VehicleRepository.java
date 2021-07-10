package io.javabrains.springbootstarter.vehicle;

import io.javabrains.springbootstarter.course.Course;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface VehicleRepository extends CrudRepository<Vehicle, String> {

    //public List<Vehicle> findByUserId(String userId);

}
