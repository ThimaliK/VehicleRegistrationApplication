import React, { Component } from 'react'
import axios from 'axios'


class View extends Component {

    constructor(props) {
        super(props)

        this.state = {
            vehicles: []
            
        }

    }

    componentDidMount() {
        axios.get('http://localhost:8080/vehicles')
            .then(response => {
                console.log(response)
                this.setState({vehicles: response.data})
                
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {

        const { vehicles } = this.state

        return (
            
            <div style={{textAlign: "center", paddingLeft:"35%"}}>
            <h3 style={{textAlign: "left"}}>Registered Vehicles</h3>
                
                <ul>
                {
                    vehicles.length ?
                    vehicles.map(vehicle => <li style={{textAlign: "left"}} key={vehicle.licensePlate}> {vehicle.licensePlate} | {vehicle.vehicleForm} | {vehicle.color} | {vehicle.brand} | {vehicle.type} <br/></li>) :
                    null
                }
                </ul>

            </div>
            

    )}


}

export default View