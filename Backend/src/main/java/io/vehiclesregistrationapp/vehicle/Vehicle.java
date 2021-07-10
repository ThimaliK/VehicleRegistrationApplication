package io.vehiclesregistrationapp.vehicle;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Entity
public class Vehicle {

    @Id
    private String licensePlate;   //acts as a primary key since it is unique to each vehicle
    private String vehicleForm;
    private String color;
    private String brand;
    private String type;

    public Vehicle(String licensePlate, String userId) {
        this.licensePlate = licensePlate;
        setVehicleForm();
    }

    public Vehicle() {

    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getLicensePlate() {
        return licensePlate;
    }

    public void setLicensePlate(String licensePlate) {
        this.licensePlate = licensePlate;
    }

    public String getVehicleForm() {
        return vehicleForm;
    }

    // function which determines the form of the license plate of the vehicle (task 1)
    public void setVehicleForm() {

        //checks if license plate is old
        boolean isModern = true;
        String[] splitLicensePlate = this.licensePlate.split(findCharacterInLicensePlate());
        for (String part : splitLicensePlate) {
            part = part.trim();
            if (!part.matches("[0-9]+")) {
                isModern = false;
                break;
            }
        }

        if(isModern) {
            this.vehicleForm = "Old";
            return;
        }

        //checks if license plate is modern
        Pattern pattern = Pattern.compile(".*[a-zA-Z]+.*");
        Matcher matcher = pattern.matcher(this.licensePlate);
        if (matcher.matches()) {
            this.vehicleForm = "Modern";
            return;
        }

        this.vehicleForm = "Vintage";

    }

    public String findCharacterInLicensePlate() {
        if(this.licensePlate.contains("-")) {
            return "-";
        } else {
            return " ";
        }
    }
}
